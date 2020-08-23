import React from'react';
import { render, fireEvent, waitForElement, within, cleanup } from '@testing-library/react';
import TechsList from '../components/TechsList';
import '@testing-library/jest-dom/extend-expect';

describe("Techs List", () => {

    let mockTechs = [];

    beforeEach(() => {
        mockTechs = [ 
            {
                "id": "1",
                "tech": "Android",
                "type": "Mobile"
            },
            {
                "id": "2",
                "tech": "Angular",
                "type": "Front-End"
            },
            {
                "id": "3",
                "tech": "iOS",
                "type": "Mobile"
            },
            {
                "id": "4",
                "tech": "Node",
                "type": "Back-End"
            },
            {
                "id": "5",
                "tech": "React",
                "type": "Front-End"
            },
            {
                "id": "6",
                "tech": "React Native",
                "type": "Mobile"
            },
            {
                "id": "7",
                "tech": "Ruby on Rails",
                "type": "Back-End"
            },
            {
                "id": "8",
                "tech": "Springboot",
                "type": "Back-End"
            },
            {
                "id": "9",
                "tech": "Vue",
                "type": "Front-End"
            }
        ];
    });

    afterEach(cleanup);

    it('GivenNotTechsThenDoesNotRenderAnyTechCard', async () => {
        const { getByTestId } = render(<TechsList techs={[]}/>);

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        
        expect(techCards.length).toBe(0);

    });

    it('GivenTechsWhenDoesNotFilterThenRenderAllTechCards', async () => {
        const mockTechsName = mockTechs.map(tech => tech.tech);
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
        
        expect(techCards.length).toBe(9);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenSortDescendingThenRenderTechCardsReversing', async () => {
        const mockTechsName = mockTechs.map(tech => tech.tech);
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(9);
        expect(techs).toEqual(mockTechsName.reverse());
    });

    it('GivenTechsWhenFilterByBackEndTypeThenRenderOnlyBackEndTechCards', async () => {
        const mockTechsName = ['Node', 'Ruby on Rails', 'Springboot'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterType, { target: { value: "Back-End" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByFrontEndTypeThenRenderOnlyFrontEndTechCards', async () => {
        const mockTechsName = ['Angular', 'React', 'Vue'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterType, { target: { value: "Front-End" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByMobileTypeThenRenderOnlyMobileTechCards', async () => {
        const mockTechsName = ['Android', 'iOS', 'React Native'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterType, { target: { value: "Mobile" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
        
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByBackEndTypeAndSortDescendingThenRenderOnlyBackEndTechCardsReversing', async () => {
        const mockTechsName = ['Springboot', 'Ruby on Rails', 'Node'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');
        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterType, { target: { value: "Back-End" } });
        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenSortDescendingAndFilterByBackEndTypeThenRenderOnlyBackEndTechCardsReversing', async () => {
        const mockTechsName = ['Springboot', 'Ruby on Rails', 'Node'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterSort = getByTestId('filter-sort');
        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });
        fireEvent.change(techsFilterType, { target: { value: "Back-End" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByFrontEndTypeAndSortDescendingThenRenderOnlyFrontEndTechCardsReversing', async () => {
        const mockTechsName = ['Vue', 'React', 'Angular'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');
        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterType, { target: { value: "Front-End" } });
        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenSortDescendingAndFilterByFrontEndTypeThenRenderOnlyFrontEndTechCardsReversing', async () => {
        const mockTechsName = ['Vue', 'React', 'Angular'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterSort = getByTestId('filter-sort');
        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });
        fireEvent.change(techsFilterType, { target: { value: "Front-End" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByMobileTypeAndSortDescendingThenRenderOnlyMobileTechCardsReversing', async () => {
        const mockTechsName = ['React Native', 'iOS', 'Android'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');
        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterType, { target: { value: "Mobile" } });
        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenSortDescendingAndFilterByMobileTypeThenRenderOnlyMobileTechCardsReversing', async () => {
        const mockTechsName = ['React Native', 'iOS', 'Android'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterSort = getByTestId('filter-sort');
        const techsFilterType = getByTestId('filter-type');

        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });
        fireEvent.change(techsFilterType, { target: { value: "Mobile" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    
    it('GivenTechsWhenFilterByName123ThenDoesNotRenderAnyTechCards', async () => {
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterInput = getByTestId('filter-input');

        fireEvent.change(techsFilterInput, { target: { value: "123" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
                
        expect(techCards.length).toBe(0);
    });

    it('GivenTechsWhenFilterByNameAThenRenderOnlyTechCardsWhichContainsA', async () => {
        const mockTechsName = ['Android', 'Angular', 'React', 'React Native', 'Ruby on Rails'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterInput = getByTestId('filter-input');

        fireEvent.change(techsFilterInput, { target: { value: "a" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(5);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByNameReactThenRenderOnlyTechCardsWhichContainsReact', async () => {
        const mockTechsName = ['React', 'React Native'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterInput = getByTestId('filter-input');

        fireEvent.change(techsFilterInput, { target: { value: "React" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(2);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByNameReactAndFilterByMobileThenRenderOnlyReactNativeTechCard', async () => {
        const mockTechsName = ['React Native'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterType = getByTestId('filter-type');
        const techsFilterInput = getByTestId('filter-input');

        fireEvent.change(techsFilterType, { target: { value: "Mobile" } });
        fireEvent.change(techsFilterInput, { target: { value: "React" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(1);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByNameUpercasseUAndSortDescendingThenRenderOnlyTechCardsWhichContainsU', async () => {
        const mockTechsName = ['Vue', 'Ruby on Rails', 'Angular'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterInput = getByTestId('filter-input');
        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterInput, { target: { value: "U" } });
        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(3);
        expect(techs).toEqual(mockTechsName);
    });

    it('GivenTechsWhenFilterByNameEFilterByFrontEndAndSortDescendingThenRenderOnlyTechCardsWhichContainsE', async () => {
        const mockTechsName = ['Vue', 'React'];
        const { getByTestId } = render(<TechsList techs={mockTechs}/>);

        const techsFilterInput = getByTestId('filter-input');
        const techsFilterType = getByTestId('filter-type');
        const techsFilterSort = getByTestId('filter-sort');

        fireEvent.change(techsFilterInput, { target: { value: "e" } });
        fireEvent.change(techsFilterType, { target: { value: "Front-End" } });
        fireEvent.change(techsFilterSort, { target: { value: "Descendente" } });

        const techsList = await waitForElement(()=> getByTestId('tech-cards-list'));
        const techCards = within(techsList).queryAllByTestId("tech-card");
        const techs = techCards.map(div => div.textContent.split('  ')[0]);
                
        expect(techCards.length).toBe(2);
        expect(techs).toEqual(mockTechsName);
    });
});
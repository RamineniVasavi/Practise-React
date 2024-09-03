import { act } from 'react';
import ResMenu from '../ResMenu';
import '@testing-library/jest-dom';
import { fireEvent,screen, render } from '@testing-library/react';
import mockdata from '../mockdata/mockcard.test.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
global.fetch=jest.fn(()=>
 Promise.resolve({
    json:()=>Promise.resolve(mockdata)
 })
);

it("Should load res menu component",async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
    <ResMenu/>
    </Provider>
));
    const accordionheader=screen.getByText("Rs 99 Deal Of The Day (10)");
    fireEvent.click(accordionheader);
    expect(screen.getAllByTestId("fooditem").length).toBe(10);
})
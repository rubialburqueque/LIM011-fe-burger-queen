import { mount } from '@vue/test-utils' 
import CheckList from './CheckList'

describe('Component CheckList', () => {
    it('should render the correct markup', () => {
        const wrapper = mount(CheckList)
        expect(wrapper.html())
           .toContain('<span class="count">0</span>')
    })
})
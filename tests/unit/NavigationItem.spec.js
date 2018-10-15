import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavigationItem from '@/components/NavigationItem.vue'

describe('NavigationItem.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'new message'
    const wrapper = shallowMount(NavigationItem, {
      propsData: { label }
    })
    expect(wrapper.text()).to.include(label)
  })

  it('contains link with path props.to when passed', () => {
    const to = '/target'
    const wrapper = shallowMount(NavigationItem, {
      propsData: { to },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).to.equal(to)
  })

  it('contains classname with props.type when passed', () => {
    const type = 'foobar'
    const wrapper = shallowMount(NavigationItem, {
      propsData: { type }
    })
    /* eslint-disable no-unused-expressions */
    expect(wrapper.contains(`.navigation-item--${type}`)).to.be.true
    /* eslint-disable no-unused-expressions */
  })
})

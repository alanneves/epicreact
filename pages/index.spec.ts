import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'

const defaultWrapper = mount(IndexPage)

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    expect(defaultWrapper.vm).toBeTruthy()
  })

  test('displays message', () => {
    expect(defaultWrapper.text()).toBe('Hello World')
  })
})

import vnt from '@/components/Vnt.vue';

describe('Vnt', () => {

  test('setAccentColor', () => {
    const mockSetProperty = jest.fn();

    Object.defineProperty(document, 'body', {
      value: {
        style: {
          setProperty: mockSetProperty
        }
      }
    });

    vnt.setAccentColor('#f0f0f0');

    expect(mockSetProperty).toHaveBeenCalledWith('--vnt-accent-color', '#f0f0f0');
  });

});

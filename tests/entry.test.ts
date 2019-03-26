import app from '../src/main'

const mockListen = jest.fn();
app.listen = mockListen;

afterEach(() => {
    mockListen.mockReset()
});

describe('Server entry', () => {
    test('Server works', () => {
        require('../src/entry');
        expect(mockListen.mock.calls.length).toBe(1);
        expect(mockListen.mock.calls[0][0]).toBe(process.env.PORT || 3000)
    })
});

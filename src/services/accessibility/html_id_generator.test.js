import { htmlIdGenerator } from './html_id_generator';
describe('htmlIdGenerator', function () {
    it('should return a function', function () {
        var fn = htmlIdGenerator();
        expect(typeof fn).toBe('function');
    });
    it('should return an id ending with the specified suffix', function () {
        expect(htmlIdGenerator()('suf')).toMatch(/suf$/);
    });
    it('should return an id beginning with the specified prefix', function () {
        expect(htmlIdGenerator('pref')('foo')).toMatch(/^pref/);
    });
    it('should create the same id for the same suffix', function () {
        var idGenerator = htmlIdGenerator();
        expect(idGenerator('foo')).toBe(idGenerator('foo'));
    });
    it('should create different ids for different suffixes', function () {
        var idGenerator = htmlIdGenerator();
        expect(idGenerator('foo')).not.toBe(idGenerator('bar'));
    });
    it('should generate different ids on different instances', function () {
        var idGenerator1 = htmlIdGenerator();
        var idGenerator2 = htmlIdGenerator();
        expect(idGenerator1('foo')).not.toBe(idGenerator2('foo'));
    });
    it('should generate ids beginning with "i" when not passing a prefix', function () {
        expect(htmlIdGenerator()()).toMatch(/^i/);
    });
    it('should generate different ids if no suffix is passed', function () {
        var generator = htmlIdGenerator();
        expect(generator()).not.toBe(generator());
    });
});

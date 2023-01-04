import { removeMarkdownTags } from './removeMarkdownTags';

describe('removeMarkdownTags', () => {
    it('should remove Markdown link tags from a string', () => {
        const str = 'This is a [link](http://example.com).';
        const expected = 'This is a link.';
        expect(removeMarkdownTags(str)).toEqual(expected);
    });

    it('should remove multiple Markdown link tags from a string', () => {
        const str = 'This is a [link](http://example.com) and [another link](http://example.com).';
        const expected = 'This is a link and another link.';
        expect(removeMarkdownTags(str)).toEqual(expected);
    });

    it('should return the original string if it contains no Markdown link tags', () => {
        const str = 'This is a plain string.';
        expect(removeMarkdownTags(str)).toEqual(str);
    });
});

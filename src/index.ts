/** Types of elements found in htmlparser2's DOM */
export enum ElementType {
    /** Type for the root element of a document */
    Root = 0,
    /** Type for Text */
    Text = 1,
    /** Type for <? ... ?> */
    Directive = 2,
    /** Type for <!-- ... --> */
    Comment = 3,
    /** Type for <script> tags */
    Script = 4,
    /** Type for <style> tags */
    Style = 5,
    /** Type for Any tag */
    Tag = 6,
    /** Type for <![CDATA[ ... ]]> */
    CDATA = 7,
    /** Type for <!doctype ...> */
    Doctype = 8,
}

// Bitwise flag for tag types (Tag, Script, Style)
const TAG_TYPES_FLAG =
    (1 << ElementType.Tag) |
    (1 << ElementType.Script) |
    (1 << ElementType.Style);

/**
 * Tests whether an element is a tag or not.
 * Optimized using bitwise operations for performance.
 *
 * @param elem Element to test
 */
export function isTag(elem: { type: ElementType }): boolean {
    return (TAG_TYPES_FLAG & (1 << elem.type)) !== 0;
}

// Exports for backwards compatibility
/** Type for the root element of a document */
export const Root: ElementType.Root = ElementType.Root;
/** Type for Text */
export const Text: ElementType.Text = ElementType.Text;
/** Type for <? ... ?> */
export const Directive: ElementType.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
export const Comment: ElementType.Comment = ElementType.Comment;
/** Type for <script> tags */
export const Script: ElementType.Script = ElementType.Script;
/** Type for <style> tags */
export const Style: ElementType.Style = ElementType.Style;
/** Type for Any tag */
export const Tag: ElementType.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
export const CDATA: ElementType.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
export const Doctype: ElementType.Doctype = ElementType.Doctype;

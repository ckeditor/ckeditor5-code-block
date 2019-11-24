/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';
import CodeBlockEditing from '../src/codeblockediting';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

function getEditor( initialData = '' ) {
	return ClassicTestEditor
		.create( initialData, {
			plugins: [ GFMDataProcessor, CodeBlockEditing, Enter, Paragraph ],
			dataProcessor: new GFMDataProcessor()
		} );
}

describe( 'Markdown', () => {
	it( 'should be loaded and returned from the editor', () => {
		const markdown =
			'```\n' +
			'test()\n' +
			'```';

		return getEditor( markdown ).then( editor => {
			expect( editor.getData() ).to.equal( markdown );
		} );
	} );
} );

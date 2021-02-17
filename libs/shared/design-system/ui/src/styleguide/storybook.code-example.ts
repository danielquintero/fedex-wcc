/* eslint-disable max-len */
export const storybookCodeExample = (code: string): string => `
	<div class="fedex-code-example_block">
		<label for="fedex-example-code">
			<fedex-icon type="code" size="small" css="mr-1"></fedex-icon>
			example code
		</label>
		<textarea id="fedex-example-code" class="fedex-code-example">
			${code.split('<').join('&#60;').split('>').join('&#62;')}
		</textarea>
		<fedex-button
			onclick="document.getElementById('fedex-example-code').select(); document.execCommand('copy'); document.getElementById('fedex-example-code').blur();"
			label="copy"
			icon="content_copy"
			action="secondary"
			iconOnly="true"
			css="justify-self-end"
		></fedex-button>
	</div>
`;

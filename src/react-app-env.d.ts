/// <reference types="react-scripts" />

declare namespace JSX {
	interface IntrinsicAttributes {
		[someAttribute: string]
		[someArray: array]
	}
}

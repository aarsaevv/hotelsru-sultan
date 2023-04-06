export type CatalogueProps = {
	imageSrc: string
	title: string
	sizeType: string
	size: number
	barcode: number
	manufacturer: string
	brand: string
	description: string
	price: number
	careType: string[]
}

export type CartProps = {
	barcode: number
	brand: string
	count: number
	description: string
	imageSrc: string
	price: number
	size: string | number
	title: string
	sizeType: string
}

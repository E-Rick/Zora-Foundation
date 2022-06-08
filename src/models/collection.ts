import {AggregateAttribute} from "./aggregateAttribute";

export interface Collection {
	collectionAddress: string;
	attributes?: Array<AggregateAttribute>;
	name?: string;
	symbol: string;
	totalSupply?: number;
}

export const decodeCollection = (collection: any): Collection => ({
	collectionAddress: collection.address,
	attributes: collection.attributes,
	name: collection.name,
	symbol: collection.symbol,
	totalSupply: collection.totalSupply,
});

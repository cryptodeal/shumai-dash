export type TreeMapLastChild = {
	name: string;
	value: number;
	other_data?: Record<string, string | number>;
};

export type TreeMapDatum = {
	name: string;
	children: TreeMapDatum[] | TreeMapLastChild[];
};
export interface Tree {
	name: string;
	value: number;
	children?: Tree[];
}

export type Timer = ReturnType<typeof setTimeout>;

interface InfiniteArrayElement {
    [key: string]: InfiniteArrayElement | InfiniteArrayElement[] | Primitive;
    [index: number]: InfiniteArrayElement | InfiniteArrayElement[] | Primitive;
}

// Define primitive types separately
type Primitive = string | number | boolean | null | undefined;

// Main wrapper class
class InfiniteDimensionalArray {
    private data: any; // Using 'any' at implementation level for flexibility

    constructor(initialData: any = []) {
        this.data = initialData;
    }

    // Get value at a specific path
    get(path: (string | number)[]): any {
        let current: any = this.data;

        for (const key of path) {
            if (current === undefined || current === null) {
                return undefined;
            }
            current = current[key];
        }

        return current;
    }

    // Set value at a specific path
    set(path: (string | number)[], value: any): void {
        if (path.length === 0) {
            this.data = value;
            return;
        }

        let current: any = this.data;
        const lastIndex = path.length - 1;

        for (let i = 0; i < lastIndex; i++) {
            const key = path[i];

            // Create path if it doesn't exist
            if (current[key] === undefined) {
                // If next key is a number, create an array, otherwise create an object
                current[key] = typeof path[i + 1] === 'number' ? [] : {};
            }

            current = current[key];
        }

        current[path[lastIndex]] = value;
    }

    // Get the entire data structure
    getData(): any {
        return this.data;
    }

    // Create a new dimension at a path
    createDimension(path: (string | number)[]): void {
        const existingValue = this.get(path);

        if (Array.isArray(existingValue)) {
            // If it's already an array, we don't need to do anything
            return;
        }

        this.set(path, []);
    }

    // Helper method to print the structure (for debugging)
    toString(): string {
        return JSON.stringify(this.data, null, 2);
    }
}
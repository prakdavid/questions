export class Category {
    constructor(
        public title: string,
        public description: string,
        public image: string,
        public slug: string,
        public tags: Array<Object>) {

    }
}
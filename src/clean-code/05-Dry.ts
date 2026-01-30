class Product {
    constructor(
        public name: string = ''
    ) {}

    toString(){
        if ( this.name.length <= 0 ) throw Error('Name is empty');
        return `${ this.name}`;
    }
}

(()=>{

    const bluePants = new Product('Blue Pans');
    console.log(bluePants.toString());

})
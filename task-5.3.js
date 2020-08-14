class Storage{
  constructor(items){
    this.items = items;
  }
  getItems(){
    return this.items;
  }
  addItem(item){
    this.items = items.push(item);
  }
  removeItem(item){
    if (items.indexOf(item) > -1) {
        console.log('kuku');
        items.splice(items.indexOf(item),1)
        return this.items
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);



const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
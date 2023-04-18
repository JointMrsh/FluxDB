const fs = require('fs');
const path = require('path');

class JSONDatabase {
  constructor(filename) {
    this.filename = filename;
    this.data = {};
    this.load();
    this.createFolderAndNotice();
  }

  load() {
    try {
      const data = fs.readFileSync(this.filename);
      this.data = JSON.parse(data);
    } catch (err) {
      console.error(`Error loading JSON file: ${err}`);
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filename, JSON.stringify(this.data));
    } catch (err) {
      console.error(`Error saving JSON file: ${err}`);
    }
  }

  get(collection, id) {
    if (!this.data[collection]) {
      return null;
    }
    return this.data[collection][id];
  }

  set(collection, id, value) {
    if (!this.data[collection]) {
      this.data[collection] = {};
    }
    this.data[collection][id] = value;
    this.save();
  }

  remove(collection, id) {
    if (!this.data[collection]) {
      return null;
    }
    const value = this.data[collection][id];
    delete this.data[collection][id];
    this.save();
    return value;
  }

  createFolderAndNotice() {
    const folderName = 'FluxDB';
    const noticeFileName = 'NOTICE.md';
    const noticeContent = '# Notice\nMoving any of your JSON\'s files will prevent FluxDB from editing the data in it and deleting the Folder will require you to re import the folder.';

    try {
      // create folder if not exists
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }

      // create NOTICE.md if not exists
      const noticePath = path.join(folderName, noticeFileName);
      if (!fs.existsSync(noticePath)) {
        fs.writeFileSync(noticePath, noticeContent);
      }
    } catch (err) {
      console.error(`Error creating FluxDB folder and NOTICE.md file: ${err}`);
    }
  }
}

module.exports = JSONDatabase;

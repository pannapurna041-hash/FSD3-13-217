CRUDE [
    C-create/add/insert
    R-Retrive/view/get
    U-update/edit
    D-delete/remove
]

# FS (file system) Node JS's Module
interact directly with operating system (it direct connect with client OS rather than browser)

## Major task of FS Module

- Reading and writing files
  - readfile()
  - writefile()
  - appendfile()
-  Directory Management
  - mkdir()
  - rmdir() - depricated
  - readdir()
- Metdata/Information
  - stat()
  - lstat()
  - fstat()
- Watching for Changes
  - watch()
  - watchfile()
  - unwatchfile()
- Streaming Large File
  - createReadStream()
  - createWriteStream()
- File Operation
  - rename()
  - truncate()
  - unlink() 
  - link()
  - syslink()

## if await is used

## CRUD Operation

Create/Insert,Read/Retrieve,Update,Delete
## Item
each item (id,name,price,qty)

## operation
  1. Add to cart 
  2. show cart
  3. remove from cart
  4. update quantity from cart
  5. checkout
     NOTE: all items will be stored in hdd, so after termination of program we can retrieve cart details

## Required Files
1. crud.js - it contains all the methods and entry point
2. products.json - it contains the products details in array form 
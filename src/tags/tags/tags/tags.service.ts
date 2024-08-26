import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {


    constructor(){


    }

getAllTags(){

    return 'All tags returned successfully';
}

getTagById(id:number){
    return `Tag with ID ${id} returned successfully`;
}

addTag(tagData :any){

    return 'Tag added successfully';
}
deleteTag(id:number){

    return `Tag with ID ${id} deleted successfully`;
}

updateTag(id:number, tagData:any){
    return `Tag with ID ${id} updated successfully`;
}

}

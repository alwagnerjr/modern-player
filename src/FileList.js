import React, {useState} from 'react';
import AddTrack from "./AddTrack";
import DeleteTrack from "./DeleteTrack";

function FileList({currentFileChanger}) {
    const [fileList, setFileList] = useState(['file1', 'file2', 'file3']);
    const listItems = fileList.map((file,i) =>
        <li key={i} onClick={() => {currentFileChanger(file);console.log(file)}}>{file}-{i}</li>
    );

    return (
        <div>
            <h1>Playlist will be here</h1>
            <ul>{listItems}</ul>
            <AddTrack />
            <DeleteTrack />
        </div>
    );
}

export default FileList;
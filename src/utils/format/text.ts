const convertLabel = (label:string):string => {
    if(label == ''){
        return '';
    }
    return label.split('_')[1];
}

export default {convertLabel}
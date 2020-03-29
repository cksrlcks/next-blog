const formatDate = date => {
    const stringDate = new Date(date);
    const year = stringDate.getFullYear();
    const month = stringDate.getMonth() + 1;
    const day = stringDate.getDate();

    return (year + '년 ' + month + '월 ' + day + '일');
}

export default formatDate;
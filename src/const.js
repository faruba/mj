
const subNum = [1,2,3,4,5,6,7,8,9];
const SubType= {
    n1:1, n2:2,n3:3,n4:4,n5:5,n6:6,n7:7,n8:8,n9:9,
    north:10, east:11, west:12, sorth:13,
    middle:14, write:15, blank:16, 
    spring:17, summer:18, autumn: 19,winter:20, mei:21, lan:22, zhu:23, ju:24,
}

module.export = {
    Type:{
        wan: { id:1, num:4, sub:subNum },
        bing:{ id:2, num:4, sub:subNum },
        tiao:{ id:3, num:4, sub:subNum },
        feng:{ id:4, num:4, sub:[10, 11, 12, 13]},
        jian:{ id:5, num:4, sub:[14,15,16]},
        hua: { id:6, num:1, sub:[17,18,19,20,21,22,23,24]},
    },
    SubType,
}

<template>
  <HeaderNav :current="current" @handleChangeMenu="handleChangeMenu" />
  <div class="top-bg">
    <div class="spidersOne"></div>
    <div class="spidersTwo"></div>
    <div class="spidersThree"></div>
    <div class="clock-wrapper">
      <p id="clock">{{ timeNow?.[1] }}</p>
      <p id="date">{{ timeNow?.[0] }}</p>
    </div>
    <div class="user-info">
      <a-avatar :src="avatar" :size="100" class="avatar" />
      <span>{{ bio }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import HeaderNav from '@components/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  },
  props: {
    avatar: {
      type: String,
      default: ""
    },
    bio: {
      type: String,
      default: "Nothing"
    },
    current: Object
  },
  emits: ['handleChangeMenu'],
  setup(props, emits) {
    const timeNow = ref(null)
    const getTime = function () {
      const now = Date.parse(new Date())
      timeNow.value = new Date(Number(now)).format("YY / mm / dd-HH : MM : SS").split("-")
    }
    return {
      getTime,
      timeNow,
      emits
    };
  },
  mounted() {
    this.create_time_deamon();
  },
  methods: {
    create_time_deamon() {
      setInterval(this.getTime, 1000)
    },
    handleChangeMenu(menu) {
      this.emits.emit("handleChangeMenu", menu);
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Homemade+Apple&family=Sacramento&display=swap");

.top-bg {
  height: 500px;
  width: 100%;
  position: relative;
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .spidersOne {
    position: absolute;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1896px 1757px #fff, 357px 1567px #fff, 1562px 1713px #fff,
      528px 1990px #fff, 5px 1133px #fff, 512px 866px #fff, 982px 475px #fff,
      711px 39px #fff, 216px 722px #fff, 355px 398px #fff, 1890px 633px #fff,
      1973px 1298px #fff, 1587px 1726px #fff, 747px 488px #fff,
      1526px 1465px #fff, 476px 1677px #fff, 1221px 964px #fff,
      569px 1204px #fff, 1737px 1957px #fff, 786px 20px #fff, 67px 631px #fff,
      626px 614px #fff, 602px 1747px #fff, 982px 1906px #fff, 610px 256px #fff,
      674px 69px #fff, 245px 1945px #fff, 981px 112px #fff, 387px 604px #fff,
      741px 684px #fff, 1166px 260px #fff, 1971px 790px #fff, 456px 1098px #fff,
      1873px 937px #fff, 1162px 1599px #fff, 854px 787px #fff, 481px 1288px #fff,
      1174px 655px #fff, 14px 1187px #fff, 197px 1102px #fff, 1965px 1420px #fff,
      1041px 1693px #fff, 452px 63px #fff, 1717px 1972px #fff,
      1711px 1905px #fff, 1518px 1249px #fff, 1089px 1251px #fff,
      1846px 355px #fff, 175px 1017px #fff, 1619px 431px #fff, 398px 1228px #fff,
      1699px 1266px #fff, 1815px 385px #fff, 1716px 1202px #fff,
      1903px 1885px #fff, 452px 1352px #fff, 951px 485px #fff, 354px 1194px #fff,
      1381px 952px #fff, 1023px 804px #fff, 342px 494px #fff, 1236px 485px #fff,
      1646px 1152px #fff, 1646px 120px #fff, 1009px 688px #fff, 297px 591px #fff,
      118px 183px #fff, 1089px 151px #fff, 1446px 1867px #fff, 402px 340px #fff,
      37px 1491px #fff, 663px 48px #fff, 1399px 151px #fff, 1686px 430px #fff,
      1113px 597px #fff, 653px 1209px #fff, 581px 1011px #fff,
      1701px 1558px #fff, 666px 639px #fff, 1292px 482px #fff, 1838px 702px #fff,
      447px 753px #fff, 1986px 98px #fff, 1422px 1753px #fff, 1608px 1858px #fff,
      301px 345px #fff, 891px 560px #fff, 1389px 1402px #fff, 1128px 988px #fff,
      1419px 1069px #fff, 738px 1091px #fff, 1654px 1833px #fff,
      147px 224px #fff, 615px 1554px #fff, 1036px 556px #fff, 1445px 854px #fff,
      128px 113px #fff, 1062px 1316px #fff, 90px 1910px #fff, 1010px 932px #fff,
      482px 970px #fff, 1367px 1894px #fff, 1535px 1942px #fff,
      681px 1472px #fff, 1201px 1128px #fff, 1233px 451px #fff,
      1830px 1228px #fff, 1803px 1190px #fff, 1829px 172px #fff,
      1232px 1604px #fff, 1493px 69px #fff, 238px 1772px #fff,
      1485px 1624px #fff, 617px 356px #fff, 1738px 980px #fff, 285px 655px #fff,
      333px 310px #fff, 137px 1481px #fff, 566px 267px #fff, 1952px 1898px #fff,
      1747px 531px #fff, 1435px 675px #fff, 172px 949px #fff, 1658px 353px #fff,
      1976px 1978px #fff, 1698px 892px #fff, 1264px 1545px #fff,
      701px 1877px #fff, 23px 1065px #fff, 1757px 1403px #fff, 980px 519px #fff,
      1733px 216px #fff, 66px 931px #fff, 797px 220px #fff, 1553px 472px #fff,
      376px 968px #fff, 1665px 193px #fff, 1955px 251px #fff, 632px 961px #fff,
      215px 1653px #fff, 1620px 517px #fff, 327px 365px #fff, 1637px 138px #fff,
      1567px 125px #fff, 247px 798px #fff, 1103px 752px #fff, 1327px 102px #fff,
      1001px 1483px #fff, 390px 1457px #fff, 802px 1832px #fff, 864px 60px #fff,
      1312px 889px #fff, 192px 1778px #fff, 1226px 1240px #fff, 925px 532px #fff,
      42px 1289px #fff, 412px 1705px #fff, 1800px 1958px #fff, 1767px 743px #fff,
      1579px 813px #fff, 1273px 1059px #fff, 1629px 35px #fff, 901px 708px #fff,
      394px 816px #fff, 1431px 598px #fff, 1353px 1199px #fff,
      1086px 1458px #fff, 1894px 374px #fff, 39px 1151px #fff, 195px 1013px #fff,
      1212px 541px #fff, 1559px 1465px #fff, 1816px 1875px #fff,
      851px 1604px #fff, 1242px 102px #fff, 1594px 1052px #fff,
      235px 1540px #fff, 333px 72px #fff, 705px 1007px #fff, 693px 708px #fff,
      1305px 1432px #fff, 1087px 341px #fff, 1215px 666px #fff,
      1608px 1591px #fff, 1704px 1776px #fff, 548px 897px #fff, 12px 1842px #fff,
      1866px 426px #fff, 717px 1461px #fff, 17px 588px #fff, 354px 12px #fff,
      1542px 383px #fff, 514px 654px #fff, 1859px 92px #fff, 948px 929px #fff,
      731px 129px #fff, 715px 115px #fff, 1661px 518px #fff, 37px 1904px #fff,
      1275px 967px #fff, 456px 1810px #fff, 1166px 534px #fff, 218px 1358px #fff,
      1508px 93px #fff, 546px 135px #fff, 1318px 1910px #fff, 1925px 1940px #fff,
      671px 1224px #fff, 544px 248px #fff, 1616px 1307px #fff, 618px 916px #fff,
      1117px 1287px #fff, 649px 1671px #fff, 815px 606px #fff, 553px 1287px #fff,
      1789px 1426px #fff, 289px 1884px #fff, 1740px 1796px #fff,
      423px 851px #fff, 1906px 1896px #fff, 264px 66px #fff, 1294px 1135px #fff,
      1547px 1566px #fff, 76px 158px #fff, 1283px 1748px #fff,
      1162px 1357px #fff, 220px 812px #fff, 1174px 158px #fff, 497px 1255px #fff,
      251px 1738px #fff, 1361px 696px #fff, 158px 1589px #fff, 313px 873px #fff,
      1719px 1572px #fff, 1657px 545px #fff, 1293px 185px #fff,
      1355px 1454px #fff, 1430px 1479px #fff, 1578px 609px #fff,
      1537px 1408px #fff, 216px 1192px #fff, 353px 1564px #fff,
      1850px 1139px #fff, 1063px 219px #fff, 415px 1335px #fff, 393px 723px #fff,
      555px 1511px #fff, 1068px 482px #fff, 1238px 283px #fff, 1667px 710px #fff,
      642px 1607px #fff, 443px 1071px #fff, 527px 1259px #fff,
      1446px 1132px #fff, 653px 47px #fff, 1826px 1680px #fff,
      1143px 1366px #fff, 773px 1896px #fff, 1625px 1176px #fff,
      1809px 849px #fff, 368px 1274px #fff, 1822px 565px #fff,
      1201px 1603px #fff, 255px 164px #fff, 125px 840px #fff, 1965px 424px #fff,
      1081px 61px #fff, 970px 884px #fff, 882px 1809px #fff, 142px 678px #fff,
      331px 1603px #fff, 679px 666px #fff, 386px 27px #fff, 1777px 1332px #fff,
      1859px 632px #fff, 498px 1287px #fff, 789px 1740px #fff, 642px 525px #fff,
      877px 984px #fff, 552px 547px #fff, 498px 1482px #fff, 75px 411px #fff,
      505px 1755px #fff, 483px 665px #fff, 1376px 117px #fff, 1493px 1035px #fff,
      236px 913px #fff, 74px 1643px #fff, 1097px 1331px #fff, 644px 897px #fff,
      787px 937px #fff, 631px 874px #fff, 1478px 1274px #fff, 381px 1841px #fff,
      1669px 403px #fff, 582px 456px #fff, 700px 677px #fff, 304px 218px #fff,
      1285px 1328px #fff, 380px 1994px #fff, 598px 1217px #fff,
      1968px 654px #fff, 538px 1081px #fff, 1114px 1816px #fff, 760px 857px #fff,
      1482px 1322px #fff, 1415px 779px #fff, 5px 1431px #fff, 1684px 1326px #fff,
      1932px 101px #fff, 588px 1539px #fff, 1291px 98px #fff, 774px 1657px #fff,
      907px 1045px #fff, 1929px 1895px #fff, 1825px 1300px #fff,
      1634px 1478px #fff, 1951px 835px #fff, 379px 1751px #fff,
      1023px 681px #fff, 1511px 768px #fff, 871px 647px #fff, 1574px 702px #fff,
      28px 124px #fff, 106px 386px #fff, 1043px 557px #fff, 1316px 1464px #fff,
      1904px 597px #fff, 1968px 1743px #fff, 1064px 102px #fff,
      320px 1442px #fff, 1717px 1412px #fff, 371px 1968px #fff,
      766px 1543px #fff, 533px 1278px #fff, 436px 303px #fff, 493px 1204px #fff,
      1626px 695px #fff, 1614px 364px #fff, 946px 701px #fff, 1854px 1276px #fff,
      702px 34px #fff, 121px 1218px #fff, 927px 729px #fff, 1919px 693px #fff,
      923px 1177px #fff, 1041px 1872px #fff, 1212px 151px #fff, 1344px 2px #fff,
      356px 1223px #fff, 1265px 380px #fff, 1755px 856px #fff,
      1454px 1200px #fff, 584px 725px #fff, 1417px 872px #fff, 703px 1029px #fff,
      175px 1890px #fff, 631px 363px #fff, 311px 1200px #fff, 915px 1685px #fff,
      835px 1359px #fff, 1317px 109px #fff, 95px 677px #fff, 1583px 89px #fff,
      807px 1312px #fff, 1321px 1671px #fff, 1052px 766px #fff,
      1124px 184px #fff, 837px 1864px #fff, 1819px 134px #fff, 1739px 31px #fff,
      1796px 479px #fff, 854px 1776px #fff, 1308px 176px #fff, 1820px 489px #fff,
      633px 1624px #fff, 1023px 658px #fff, 143px 1346px #fff, 1532px 636px #fff,
      199px 188px #fff, 1579px 1348px #fff, 338px 1616px #fff, 270px 1477px #fff,
      990px 1073px #fff, 961px 693px #fff, 427px 1351px #fff, 330px 472px #fff,
      1602px 1630px #fff, 923px 1983px #fff, 697px 879px #fff, 1695px 817px #fff,
      1302px 1189px #fff, 837px 1531px #fff, 1306px 1286px #fff,
      200px 1573px #fff, 426px 432px #fff, 348px 198px #fff, 158px 1289px #fff,
      401px 216px #fff, 1388px 1118px #fff, 892px 681px #fff, 769px 501px #fff,
      300px 1161px #fff, 722px 136px #fff, 58px 1185px #fff, 1693px 451px #fff,
      1248px 1180px #fff, 1636px 1064px #fff, 951px 499px #fff,
      1398px 918px #fff, 793px 1983px #fff, 722px 602px #fff, 1979px 1779px #fff,
      1268px 1345px #fff, 98px 1187px #fff, 1px 915px #fff, 1036px 81px #fff,
      1393px 748px #fff, 1488px 428px #fff, 7px 1044px #fff, 928px 56px #fff,
      1668px 1659px #fff, 1742px 259px #fff, 816px 99px #fff, 844px 1945px #fff,
      593px 434px #fff, 1819px 1751px #fff, 1248px 646px #fff, 1058px 231px #fff,
      1360px 1612px #fff, 1880px 104px #fff, 1617px 832px #fff,
      420px 1167px #fff, 640px 870px #fff, 1703px 366px #fff, 1531px 722px #fff,
      1058px 909px #fff, 126px 719px #fff, 1874px 927px #fff, 1307px 1026px #fff,
      1314px 1152px #fff, 1610px 1135px #fff, 905px 1998px #fff,
      1398px 479px #fff, 1807px 957px #fff, 335px 1160px #fff, 1774px 153px #fff,
      393px 1754px #fff, 407px 930px #fff, 1207px 1714px #fff,
      1880px 2000px #fff, 1604px 1197px #fff, 375px 476px #fff, 136px 882px #fff,
      1135px 377px #fff, 62px 356px #fff, 150px 1844px #fff, 1023px 687px #fff,
      816px 281px #fff, 1474px 1623px #fff, 1159px 574px #fff, 294px 1000px #fff,
      829px 1159px #fff, 1897px 8px #fff, 586px 1474px #fff, 1451px 1152px #fff,
      1753px 1359px #fff, 120px 1361px #fff, 1388px 534px #fff,
      930px 1962px #fff, 949px 641px #fff, 1764px 126px #fff, 1024px 445px #fff,
      681px 252px #fff, 86px 678px #fff, 533px 1571px #fff, 1041px 614px #fff,
      864px 1262px #fff, 1029px 961px #fff, 1423px 198px #fff, 1248px 629px #fff,
      913px 581px #fff, 940px 1537px #fff, 1037px 691px #fff, 984px 758px #fff,
      1776px 469px #fff, 1953px 1615px #fff, 1802px 1528px #fff,
      387px 535px #fff, 1289px 1451px #fff, 805px 16px #fff, 27px 804px #fff,
      9px 1162px #fff, 1909px 752px #fff, 796px 1303px #fff, 1405px 1085px #fff,
      1006px 948px #fff, 982px 16px #fff, 1061px 906px #fff, 1423px 1334px #fff,
      359px 1874px #fff, 630px 1765px #fff, 1657px 987px #fff,
      1301px 1042px #fff, 872px 335px #fff, 1027px 570px #fff,
      1645px 1787px #fff, 1961px 1853px #fff, 1116px 545px #fff,
      1001px 1168px #fff, 386px 274px #fff, 759px 1340px #fff,
      1844px 1469px #fff, 661px 1453px #fff, 1517px 445px #fff,
      1371px 1980px #fff, 516px 734px #fff, 1673px 1937px #fff,
      187px 1424px #fff, 888px 604px #fff, 371px 546px #fff, 1929px 50px #fff,
      1752px 485px #fff, 400px 1576px #fff, 1225px 928px #fff, 689px 1606px #fff,
      836px 1602px #fff, 1510px 990px #fff, 1645px 104px #fff,
      1545px 1857px #fff, 1520px 1670px #fff, 162px 1739px #fff,
      1859px 78px #fff, 494px 670px #fff, 1003px 1465px #fff, 560px 223px #fff,
      626px 1225px #fff, 791px 10px #fff, 1550px 1165px #fff, 1901px 1700px #fff,
      1675px 1927px #fff, 1480px 1793px #fff, 1742px 1671px #fff,
      235px 1155px #fff, 515px 1521px #fff, 1195px 91px #fff, 1618px 25px #fff,
      1745px 991px #fff, 1424px 1899px #fff, 5px 1945px #fff, 1250px 10px #fff,
      1132px 1336px #fff, 59px 560px #fff, 304px 1469px #fff, 1895px 224px #fff,
      1130px 361px #fff, 1619px 1903px #fff, 581px 446px #fff, 831px 256px #fff,
      981px 1908px #fff, 1842px 1417px #fff, 1215px 1317px #fff,
      1432px 597px #fff, 1182px 179px #fff, 1297px 1601px #fff,
      1527px 698px #fff, 102px 600px #fff, 872px 814px #fff, 112px 360px #fff,
      1706px 1614px #fff, 303px 795px #fff, 1008px 756px #fff, 395px 301px #fff,
      1118px 436px #fff, 533px 1831px #fff, 31px 974px #fff, 1763px 1622px #fff,
      1876px 1593px #fff, 1581px 1357px #fff, 130px 1196px #fff,
      1503px 174px #fff, 734px 253px #fff, 1247px 1919px #fff, 1092px 852px #fff,
      1662px 1430px #fff, 685px 217px #fff, 1192px 68px #fff, 1778px 1506px #fff,
      876px 659px #fff, 1982px 1875px #fff, 622px 858px #fff, 1792px 280px #fff,
      266px 1181px #fff, 1191px 1700px #fff, 1791px 1058px #fff,
      643px 339px #fff, 340px 328px #fff, 1865px 1651px #fff, 163px 1959px #fff,
      517px 1074px #fff, 1973px 1499px #fff, 1482px 1546px #fff,
      1945px 1296px #fff, 1299px 710px #fff, 1355px 1682px #fff,
      1616px 1788px #fff, 1193px 442px #fff, 160px 531px #fff, 24px 272px #fff,
      745px 84px #fff, 385px 623px #fff, 563px 431px #fff, 1456px 1194px #fff,
      1374px 771px #fff, 1222px 1874px #fff, 1660px 665px #fff,
      1537px 1923px #fff, 1539px 1245px #fff, 1456px 392px #fff,
      481px 1802px #fff, 411px 955px #fff, 1894px 1832px #fff, 44px 1240px #fff,
      766px 1637px #fff, 1201px 702px #fff, 1297px 1081px #fff,
      1131px 1256px #fff, 1036px 1749px #fff, 1892px 1869px #fff,
      965px 1764px #fff, 1451px 1181px #fff, 429px 1152px #fff, 1634px 97px #fff,
      858px 1115px #fff, 348px 1048px #fff, 370px 404px #fff, 1591px 303px #fff,
      668px 190px #fff, 932px 1365px #fff, 842px 148px #fff, 627px 645px #fff,
      1222px 1543px #fff, 1053px 1091px #fff, 325px 929px #fff,
      1850px 534px #fff, 1207px 344px #fff, 946px 472px #fff, 460px 35px #fff,
      1233px 303px #fff, 901px 340px #fff, 1963px 1649px #fff, 1547px 591px #fff,
      1402px 1599px #fff, 728px 1474px #fff, 911px 1623px #fff,
      1680px 557px #fff, 1550px 185px #fff, 1091px 289px #fff, 1842px 43px #fff,
      859px 451px #fff, 1774px 145px #fff, 1115px 1028px #fff,
      1383px 1104px #fff, 1417px 665px #fff, 1208px 999px #fff,
      224px 1288px #fff, 1665px 1254px #fff, 163px 1511px #fff,
      1328px 1463px #fff, 1796px 1676px #fff, 31px 1961px #fff, 53px 1108px #fff,
      1778px 381px #fff, 686px 436px #fff, 604px 359px #fff, 1082px 1354px #fff,
      1563px 567px #fff, 217px 793px #fff, 701px 1689px #fff, 1985px 1325px #fff,
      392px 1315px #fff, 357px 1643px #fff, 1783px 1782px #fff, 822px 174px #fff,
      709px 577px #fff, 172px 1356px #fff, 1322px 1430px #fff, 1051px 894px #fff,
      249px 520px #fff, 1475px 1639px #fff, 813px 534px #fff, 1020px 1628px #fff,
      1835px 706px #fff, 1540px 693px #fff, 86px 1662px #fff, 815px 1122px #fff,
      1118px 107px #fff, 1046px 1670px #fff, 416px 1460px #fff,
      545px 1923px #fff;
    animation: animStar 50s linear infinite;
  }
  .spidersTwo {
    position: absolute;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1009px 1672px #fff, 138px 373px #fff, 656px 1878px #fff,
      1188px 1907px #fff, 552px 1192px #fff, 1174px 403px #fff,
      415px 1229px #fff, 1016px 1353px #fff, 347px 519px #fff, 135px 257px #fff,
      258px 1153px #fff, 1984px 1667px #fff, 373px 1342px #fff,
      1524px 771px #fff, 684px 326px #fff, 1752px 1117px #fff,
      1731px 1356px #fff, 336px 842px #fff, 620px 1127px #fff, 773px 1086px #fff,
      455px 1837px #fff, 1853px 1893px #fff, 1077px 508px #fff,
      1415px 1358px #fff, 1598px 935px #fff, 1111px 317px #fff,
      908px 1093px #fff, 1683px 1457px #fff, 950px 1137px #fff, 700px 417px #fff,
      1200px 1959px #fff, 1613px 476px #fff, 202px 1862px #fff,
      805px 1869px #fff, 282px 976px #fff, 646px 1202px #fff, 433px 820px #fff,
      848px 1428px #fff, 1234px 1732px #fff, 825px 437px #fff, 224px 118px #fff,
      1620px 426px #fff, 1600px 1470px #fff, 1775px 75px #fff, 1693px 501px #fff,
      945px 1305px #fff, 1477px 556px #fff, 672px 92px #fff, 1144px 1585px #fff,
      672px 1103px #fff, 1036px 1155px #fff, 1755px 1832px #fff,
      1374px 419px #fff, 992px 248px #fff, 312px 1803px #fff, 592px 1568px #fff,
      1316px 52px #fff, 667px 335px #fff, 1349px 297px #fff, 1334px 1033px #fff,
      522px 1160px #fff, 1725px 238px #fff, 1944px 1350px #fff, 1310px 45px #fff,
      1657px 431px #fff, 1043px 356px #fff, 934px 1137px #fff, 1033px 646px #fff,
      1407px 1380px #fff, 1218px 251px #fff, 1075px 1613px #fff,
      372px 1955px #fff, 901px 1468px #fff, 680px 1316px #fff, 430px 281px #fff,
      1598px 1672px #fff, 1703px 1689px #fff, 686px 1308px #fff,
      999px 1826px #fff, 1505px 1874px #fff, 1935px 1308px #fff,
      1321px 661px #fff, 65px 607px #fff, 1247px 924px #fff, 1305px 199px #fff,
      894px 1883px #fff, 188px 1875px #fff, 1618px 541px #fff, 825px 76px #fff,
      182px 289px #fff, 332px 1060px #fff, 246px 19px #fff, 49px 326px #fff,
      558px 151px #fff, 773px 1064px #fff, 1151px 1661px #fff, 159px 210px #fff,
      760px 1838px #fff, 844px 1540px #fff, 1877px 144px #fff, 1227px 655px #fff,
      938px 886px #fff, 662px 580px #fff, 143px 671px #fff, 1255px 1838px #fff,
      1357px 1895px #fff, 174px 706px #fff, 308px 1311px #fff,
      1730px 1445px #fff, 522px 9px #fff, 825px 441px #fff, 1913px 406px #fff,
      636px 381px #fff, 1666px 1572px #fff, 1729px 1347px #fff, 895px 923px #fff,
      1916px 1110px #fff, 566px 748px #fff, 1701px 401px #fff, 736px 879px #fff,
      808px 1750px #fff, 1475px 43px #fff, 1705px 1595px #fff, 1017px 547px #fff,
      27px 45px #fff, 1066px 10px #fff, 725px 1200px #fff, 430px 1016px #fff,
      762px 327px #fff, 1237px 1768px #fff, 388px 1904px #fff, 446px 1518px #fff,
      768px 382px #fff, 1435px 966px #fff, 1678px 1153px #fff,
      1039px 1238px #fff, 1884px 530px #fff, 1868px 1147px #fff,
      293px 555px #fff, 945px 273px #fff, 1845px 1614px #fff, 576px 159px #fff,
      44px 1377px #fff, 1253px 588px #fff, 520px 762px #fff, 1689px 611px #fff,
      1918px 1891px #fff, 770px 1751px #fff, 1420px 1504px #fff,
      897px 576px #fff, 1177px 1035px #fff, 1849px 990px #fff, 1467px 535px #fff,
      556px 1373px #fff, 905px 676px #fff, 223px 309px #fff, 1400px 1148px #fff,
      1863px 1048px #fff, 581px 1487px #fff, 137px 1456px #fff,
      1825px 820px #fff, 1127px 1358px #fff, 989px 1491px #fff, 1467px 18px #fff,
      1959px 260px #fff, 1828px 1970px #fff, 1115px 1906px #fff,
      347px 1364px #fff, 456px 1876px #fff, 308px 1239px #fff, 195px 185px #fff,
      1011px 20px #fff, 1433px 1641px #fff, 1560px 393px #fff, 1601px 568px #fff,
      1562px 538px #fff, 263px 118px #fff, 4px 1052px #fff, 1803px 1129px #fff,
      1289px 449px #fff, 1515px 1520px #fff, 1791px 1045px #fff,
      302px 803px #fff, 232px 1765px #fff, 433px 211px #fff, 1589px 1220px #fff,
      1739px 48px #fff, 366px 747px #fff, 1170px 296px #fff, 1861px 1966px #fff,
      1012px 858px #fff, 1114px 225px #fff, 1038px 1892px #fff,
      1340px 550px #fff, 1234px 1693px #fff, 812px 177px #fff, 743px 1181px #fff,
      115px 1483px #fff, 304px 1745px #fff, 1905px 439px #fff;
    animation: animStar 100s linear infinite;
  }
  .spidersThree {
    position: absolute;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 690px 1182px #fff, 916px 177px #fff, 1029px 137px #fff,
      61px 919px #fff, 1251px 915px #fff, 220px 1124px #fff, 1892px 1457px #fff,
      366px 1845px #fff, 583px 281px #fff, 1290px 36px #fff, 546px 946px #fff,
      1173px 1493px #fff, 243px 1852px #fff, 1303px 268px #fff, 596px 169px #fff,
      695px 299px #fff, 1962px 1078px #fff, 125px 508px #fff, 1901px 456px #fff,
      26px 1662px #fff, 1872px 1028px #fff, 458px 827px #fff, 1363px 584px #fff,
      1427px 1816px #fff, 784px 1700px #fff, 1085px 327px #fff,
      1895px 1694px #fff, 581px 1803px #fff, 540px 159px #fff, 1197px 733px #fff,
      1997px 959px #fff, 736px 1069px #fff, 1027px 1408px #fff,
      226px 1855px #fff, 461px 1358px #fff, 1153px 705px #fff, 852px 1168px #fff,
      777px 854px #fff, 753px 1304px #fff, 871px 727px #fff, 1645px 550px #fff,
      1980px 1084px #fff, 406px 923px #fff, 1279px 1390px #fff,
      1269px 472px #fff, 1173px 336px #fff, 1900px 905px #fff, 823px 1794px #fff,
      938px 1473px #fff, 639px 108px #fff, 12px 178px #fff, 1630px 1588px #fff,
      847px 1385px #fff, 127px 319px #fff, 1987px 216px #fff, 1403px 1815px #fff,
      1572px 194px #fff, 1388px 1906px #fff, 937px 53px #fff, 366px 729px #fff,
      1741px 1176px #fff, 1485px 1383px #fff, 794px 1405px #fff,
      251px 793px #fff, 207px 390px #fff, 1355px 172px #fff, 243px 1991px #fff,
      654px 31px #fff, 212px 24px #fff, 304px 1932px #fff, 1196px 1130px #fff,
      1122px 1653px #fff, 252px 1385px #fff, 1547px 216px #fff,
      1970px 223px #fff, 736px 157px #fff, 951px 708px #fff, 239px 1186px #fff,
      1396px 1127px #fff, 731px 784px #fff, 1109px 161px #fff, 841px 880px #fff,
      740px 1972px #fff, 1635px 1377px #fff, 1820px 1654px #fff,
      1281px 1907px #fff, 261px 1740px #fff, 1390px 1585px #fff,
      1588px 199px #fff, 928px 1851px #fff, 903px 1346px #fff, 1489px 702px #fff,
      34px 714px #fff, 56px 1714px #fff, 485px 16px #fff, 888px 34px #fff,
      1197px 756px #fff, 423px 1655px #fff, 29px 709px #fff, 411px 662px #fff;
    animation: animStar 150s linear infinite;
  }
  .clock-wrapper {
    font-family: "Bangers", cursive;
    font-size: 50px;
    line-height: 5px;
    position: absolute;
    bottom: 10px;
    right: 50px;
    color: white;
  }
  .user-info {
    width: 50%;
    min-width: 300px;
    height: 140px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      margin-top: 5px;
    }
    .avatar {
      &:hover {
        animation: rotate-center 0.6s ease-in-out both;
      }
    }
  }
  @keyframes animStar {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-2000px, -2000px);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
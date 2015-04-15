/*
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.3.1-sr2.19840
 * @id fusionmaps.SolomonIsland.20.10-30-2012 07:04:41
 */
FusionCharts(["private","modules.renderer.js-solomonisland",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=true&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;
d=[{name:"SolomonIsland",revision:20,creditLabel:l,standaloneInit:true,baseWidth:580,baseHeight:276,baseScaleFactor:10,entities:{"SB.CN":{outlines:[[i,1980,1305,f,1967,1287,1949,1287,1943,1287,1930,1303,1915,1320,1915,1339,1915,1344,1924,1356,1933,1369,1933,1374,1933,1405,1990,1327,f,1990,1318,1980,1305,c]],label:"Central",shortLabel:"CN",labelPosition:[195.3,153],labelAlignment:[t,m],labelConnectors:[[i,1953,1530,j,1953,1335]]},"SB.ML":{outlines:[[i,3300,1628,f,3298,1629,3293,1645,3298,1645,3303,1647,3303,1654,3297,1663,3290,1672,3290,1682,3290,1702,3326,1717,3350,1717,3350,1683,3350,1627,3315,1627,f,3301,1627,3300,1628,c],[i,2663,972,j,2663,1005,f,2693,1030,2701,1039,2713,1053,2713,1086,2703,1120,2703,1147,2703,1176,2697,1192,2690,1209,2690,1216,2692,1222,2692,1225,j,2708,1225,f,2744,1225,2748,1255,2753,1309,2758,1317,2763,1328,2776,1341,2778,1345,2779,1348,2790,1367,2807,1379,2829,1392,2840,1402,2862,1412,2878,1427,2892,1459,2903,1462,2945,1475,2978,1532,3000,1570,3035,1607,j,3058,1607,3060,1633,f,3061,1650,3075,1655,3117,1667,3123,1667,3138,1667,3138,1651,3138,1627,3118,1589,3096,1547,3093,1533,j,3093,1532,3093,1532,f,3092,1532,3092,1531,3058,1485,3045,1480,j,3045,1520,f,2976,1493,2985,1437,2990,1410,2980,1384,2974,1369,2960,1340,2951,1309,2905,1255,2898,1243,2866,1223,2840,1206,2840,1186,2840,1177,2850,1163,2860,1149,2860,1127,2860,1109,2788,1037,2786,1034,2767,994,2746,957,2735,957,2731,963,2725,969,2712,980,2702,980,2701,980,2680,972,c]],label:"Malaita",shortLabel:"ML",labelPosition:[325.6,109.5],labelAlignment:[b,v],labelConnectors:[[i,3256,1095,j,2761,1095]]},"SB.MK":{outlines:[[i,2996,1960,f,3031,1957,3033,1957,3060,1957,3066,1959,3090,1964,3099,1986,3113,2016,3115,2043,3116,2063,3124,2072,3128,2077,3144,2087,3149,2102,3164,2103,3183,2103,3192,2113,3236,2161,3283,2161,3333,2161,3342,2165,3355,2171,3368,2175,3376,2178,3387,2188,3405,2196,3410,2196,3414,2196,3439,2185,3443,2183,3466,2181,3469,2180,3477,2165,3479,2164,3489,2147,3485,2128,3485,2120,3474,2122,3462,2103,3440,2068,3438,2065,3427,2045,3418,2031,3400,2006,3378,2006,3366,2014,3357,2013,j,3329,2013,f,3329,2016,3321,2017,3310,2017,3283,2013,3269,2006,3248,1996,3198,1959,3175,1952,3145,1940,3139,1938,3126,1927,3110,1916,3078,1891,3068,1887,3064,1886,3039,1886,3002,1886,2998,1897,f,2995,1907,2996,1960,c]],label:"Makira",shortLabel:"MK",labelPosition:[366.6,213],labelAlignment:[b,v],labelConnectors:[[i,3666,2130,j,3371,2130]]},"SB.TE":{outlines:[[i,5664,2560,f,5625,2560,5625,2575,5625,2592,5675,2625,5673,2625,5673,2627,j,5720,2627,5720,2607,f,5720,2590,5704,2575,f,5687,2560,5664,2560,c],[i,5540,2410,f,5533,2407,5509,2407,5489,2407,5485,2410,5478,2414,5478,2436,5478,2449,5499,2465,5522,2482,5543,2472,5543,2465,5549,2453,5555,2441,5555,2435,f,5555,2415,5540,2410,c],[i,5348,2145,j,5348,2117,f,5295,2111,5279,2110,5277,2110,5275,2110,5228,2110,5198,2125,5161,2142,5158,2175,j,5158,2197,f,5200,2212,5209,2213,5230,2215,5230,2193,5225,2185,5225,2178,5225,2164,5277,2157,f,5341,2148,5348,2145,c]],label:"Temotu",shortLabel:"TE",labelPosition:[522.7,198],labelAlignment:[t,o],labelConnectors:[[i,5227,1980,j,5227,2135]]},"SB.RB":{outlines:[[i,2383,2538,f,2372,2554,2372,2555,2372,2558,2379,2567,2388,2577,2393,2590,2420,2586,2435,2587,2439,2587,2450,2599,2461,2611,2479,2611,2488,2611,2498,2593,2508,2598,2522,2623,2544,2650,2548,2650,2552,2650,2560,2639,2567,2627,2569,2626,2581,2620,2599,2620,j,2599,2615,f,2562,2588,2557,2587,2541,2583,2504,2563,2481,2555,2391,2522,f,2381,2522,2383,2538,c],[i,2262,2443,f,2268,2450,2283,2465,2287,2461,2298,2456,2304,2454,2304,2443,2304,2413,2263,2413,2253,2413,2253,2419,f,2253,2432,2262,2443,c]],label:"Rennell and Bellona",shortLabel:"RB",labelPosition:[277.1,260.6],labelAlignment:[b,v],labelConnectors:[[i,2771,2606,j,2546,2606]]},"SB.IS":{outlines:[[i,2211,1087,f,2222,1082,2238,1082,j,2238,1056,f,2230,1050,2213,1022,2200,1001,2182,1001,2175,1001,2160,1010,2144,1020,2144,1027,2144,1039,2176,1063,f,2202,1081,2211,1087,c],[i,1574,591,j,1580,591,f,1582,606,1595,628,1598,648,1606,648,1624,650,1645,650,1666,650,1669,640,1677,649,1686,651,1692,653,1694,660,1694,678,1696,688,1699,699,1711,707,1713,707,1715,707,1737,726,1744,731,1768,749,1774,758,1778,766,1791,774,1803,781,1805,783,j,1828,809,f,1845,823,1873,834,1912,846,1919,850,1988,890,2005,905,2042,936,2102,953,2125,960,2142,968,2167,980,2178,981,2181,981,2183,981,2205,983,2225,1003,2243,1027,2248,1031,2261,1041,2270,1057,2277,1068,2289,1071,2309,1077,2322,1085,2320,1086,2320,1087,j,2324,1087,f,2326,1076,2332,1069,2332,1055,2310,1031,2308,1028,2293,1026,2283,1024,2280,1005,2281,1002,2292,991,2300,982,2300,974,2300,966,2187,885,j,2158,863,f,2145,854,2137,840,2134,835,2107,823,2100,821,2072,806,2065,805,2058,805,2049,804,2024,787,j,1995,767,f,1989,763,1950,760,1916,749,1908,742,1902,736,1890,716,1881,703,1839,673,1831,664,1802,646,1797,642,1786,628,1774,616,1759,616,1721,615,1702,606,1684,597,1665,597,1651,598,1640,598,1612,598,1607,591,1605,589,1605,587,1605,584,1612,576,1619,569,1619,560,1619,543,1561,543,1542,544,1542,554,f,1542,559,1574,591,c]],label:"Isabel",shortLabel:"IS",labelPosition:[225.6,73],labelAlignment:[b,v],labelConnectors:[[i,2256,730,j,1821,730]]},"SB.WE":{outlines:[[i,813,840,f,798,853,798,874,798,901,832,901,865,902,865,860,j,865,837,f,862,827,844,827,f,827,827,813,840,c],[i,703,850,f,700,905,720,910,j,718,919,f,718,921,723,925,729,930,734,930,753,930,753,894,753,858,742,825,729,788,710,783,f,703,800,703,850,c],[i,795,633,f,753,598,735,598,683,598,683,642,683,659,697,671,697,672,725,690,759,713,747,757,768,775,777,775,790,770,798,770,791,734,812,719,835,702,835,674,f,835,666,795,633,c],[i,1513,1163,f,1490,1163,1490,1204,1490,1215,1515,1218,1540,1221,1540,1203,f,1540,1163,1513,1163,c],[i,1175,1151,f,1169,1153,1158,1165,j,1158,1180,f,1165,1180,1186,1192,1208,1204,1222,1207,j,1223,1205,f,1225,1203,1241,1199,1250,1196,1248,1183,1230,1174,1220,1159,1215,1150,1194,1150,f,1178,1150,1175,1151,c],[i,1100,1110,f,1102,1092,1128,1060,1128,1033,1115,1010,j,1093,1010,f,1079,1019,1052,1048,1025,1076,1025,1082,1025,1093,1090,1165,1102,1161,1102,1144,f,1102,1134,1100,1110,c],[i,1206,814,f,1182,800,1154,800,1130,800,1122,812,1102,840,1088,852,1080,887,1068,895,1060,900,1037,916,1033,906,1028,901,1023,896,1008,884,1018,879,1026,866,1038,844,1038,807,1038,737,954,737,936,737,920,757,905,777,905,800,905,834,931,844,961,855,972,881,978,883,979,883,j,990,895,990,907,979,908,983,908,f,967,910,938,912,939,914,960,945,973,965,994,965,1004,965,1004,964,1006,961,1013,955,1009,951,1006,946,j,1045,945,1048,947,f,1050,955,1064,965,1077,975,1080,975,1090,975,1099,954,1108,932,1140,932,1181,932,1195,940,1220,952,1220,994,1215,1014,1215,1020,1215,1038,1225,1052,1236,1067,1250,1067,j,1298,1067,f,1298,1077,1307,1088,1316,1100,1324,1100,1328,1100,1340,1087,j,1368,1087,f,1360,1103,1360,1119,1360,1144,1380,1165,1400,1185,1420,1185,1443,1185,1448,1177,1455,1170,1458,1165,1466,1156,1465,1147,1465,1122,1474,1102,1483,1081,1483,1080,j,1475,1060,f,1456,1055,1440,1082,1442,1082,1442,1082,j,1440,1082,1440,1082,f,1433,1080,1412,1067,1405,1067,1398,1077,j,1365,1077,f,1365,1076,1359,1033,1354,1001,1340,985,1333,976,1327,962,1323,950,1318,947,1292,930,1290,915,j,1263,915,f,1228,907,1230,850,f,1232,829,1206,814,c]],label:"Western",shortLabel:"WE",labelPosition:[107.1,127.5],labelAlignment:[t,m],labelConnectors:[[i,1071,1275,j,1071,1080]]},"SB.CH":{outlines:[[i,293,351,f,293,382,320,383,360,379,385,382,385,375,388,361,388,333,379,331,356,323,338,305,j,310,305,f,293,322,293,351,c],[i,238,480,f,231,480,220,487,208,496,208,505,208,514,225,525,236,532,242,536,244,538,246,539,262,537,263,535,265,533,265,510,265,490,260,485,f,256,480,238,480,c],[i,511,229,f,507,221,488,222,j,475,222,f,468,246,468,302,468,309,479,318,491,328,503,322,503,285,508,276,513,268,513,250,f,513,232,511,229,c],[i,1255,535,f,1285,565,1323,565,j,1323,527,f,1316,524,1301,521,1286,519,1275,512,j,1263,512,f,1263,522,1255,535,c],[i,958,457,f,967,458,972,469,976,480,978,482,989,493,1018,493,1052,492,1058,495,1108,527,1124,527,1128,527,1160,510,1166,507,1171,504,1178,525,1227,545,1228,543,1229,542,1233,538,1233,530,1233,515,1220,510,1201,503,1195,497,j,1182,497,f,1195,488,1195,484,1195,480,1193,477,1193,476,1193,475,1179,477,1166,473,1158,471,1140,465,1130,463,1107,462,1090,460,1088,447,1086,437,1052,414,1014,388,999,357,995,351,993,345,983,319,969,283,953,258,910,242,810,207,777,165,766,152,753,148,734,142,680,142,653,142,653,151,653,168,704,212,757,254,760,257,778,272,805,312,821,352,854,386,856,388,857,389,881,400,895,421,911,445,920,450,f,932,456,958,457,c]],label:"Choiseul",shortLabel:"CH",labelPosition:[90.5,12.5],labelAlignment:[t,o],labelConnectors:[[i,905,125,j,905,348]]},"SB.GC":{outlines:[[i,2278,1322,f,2243,1322,2243,1345,2243,1361,2284,1377,2325,1393,2325,1364,f,2325,1322,2278,1322,c],[i,2570,1520,f,2555,1504,2489,1503,2453,1502,2383,1505,2370,1505,2346,1498,2318,1489,2310,1480,2298,1464,2269,1448,2239,1432,2223,1432,2189,1432,2180,1472,2178,1485,2178,1545,2178,1564,2278,1670,2278,1681,2333,1690,2381,1697,2423,1697,2522,1692,2523,1692,2537,1692,2590,1742,2603,1753,2635,1753,2674,1750,2690,1750,2728,1745,2738,1745,2763,1722,2763,1705,2758,1682,2758,1672,2758,1667,2748,1663,2733,1658,2733,1657,2720,1648,2704,1641,2693,1632,2690,1602,2689,1588,2636,1559,f,2575,1524,2570,1520,c],[i,2545,1322,f,2516,1300,2507,1300,2481,1300,2450,1307,2413,1316,2413,1329,2415,1342,2415,1347,2471,1346,2482,1349,2495,1353,2495,1390,2495,1396,2498,1395,j,2558,1395,f,2563,1390,2569,1373,2575,1358,2575,1354,f,2575,1345,2545,1322,c]],label:"Guadalcanal",shortLabel:"GC",labelPosition:[243,159.6],labelAlignment:[t,v]}}}];
g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo);}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));
return;}n(w,x,n.geo);},[u,e],window]});}}}]);
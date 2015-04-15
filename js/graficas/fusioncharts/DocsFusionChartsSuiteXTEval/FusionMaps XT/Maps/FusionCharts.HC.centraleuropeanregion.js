/*
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.3.1-sr2.19840
 * @id fusionmaps.CentralEuropeanRegion.20.12-18-2012 04:19:41
 */
FusionCharts(["private","modules.renderer.js-centraleuropeanregion",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=true&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;
d=[{name:"CentralEuropeanRegion",revision:20,creditLabel:l,standaloneInit:true,baseWidth:140,baseHeight:120,baseScaleFactor:10,entities:{"05":{outlines:[[i,382,890,f,383,890,383,890,385,892,385,895,386,895,387,895,391,894,391,898,391,899,392,900,392,902,392,902,393,903,394,903,399,902,401,905,403,907,404,908,404,904,408,904,414,905,420,903,421,903,422,903,425,903,427,903,424,900,422,895,423,895,423,895,423,894,423,893,424,887,421,886,420,885,419,885,414,883,408,883,407,883,406,882,405,881,402,880,401,880,399,880,398,880,397,879,393,879,389,879,385,879,382,878,377,875,371,877,j,371,877,f,372,878,372,879,f,370,891,382,890,c]],label:"Liechtenstein",shortLabel:"LI",labelPosition:[15.1,89],labelAlignment:[q,v],labelConnectors:[[i,151,890,j,408,890]]},"08":{outlines:[[i,849,876,f,848,877,847,878,847,879,846,879,842,881,838,882,828,885,817,884,810,883,810,889,810,894,814,895,806,895,799,897,799,897,798,897,791,898,784,898,783,898,783,898,782,903,779,905,774,909,769,912,768,912,768,913,767,917,763,919,762,921,760,921,735,922,710,922,696,922,682,920,681,920,679,921,679,921,678,921,674,922,674,925,674,929,676,930,678,932,679,934,679,935,678,935,679,937,682,936,685,936,685,938,685,939,686,940,688,950,686,960,686,964,689,963,697,962,697,969,698,974,698,979,698,987,697,995,697,997,695,998,695,999,694,999,692,1001,688,1002,687,1002,686,1002,685,1003,685,1004,685,1006,685,1007,685,1009,685,1010,685,1015,685,1019,685,1020,685,1020,684,1021,684,1022,686,1022,687,1023,687,1023,688,1023,689,1023,689,1024,691,1025,691,1026,692,1027,692,1028,692,1035,692,1043,692,1044,693,1044,694,1044,695,1044,697,1044,698,1043,702,1042,705,1040,705,1041,705,1042,702,1042,701,1045,703,1045,704,1045,706,1045,707,1046,709,1046,710,1046,713,1047,715,1047,717,1047,718,1047,726,1047,734,1046,735,1046,735,1045,735,1042,735,1038,735,1035,736,1032,737,1032,738,1032,743,1032,749,1032,746,1030,747,1024,748,1022,748,1019,748,1016,753,1016,754,1016,754,1016,756,1015,758,1015,764,1016,767,1021,769,1023,770,1024,773,1026,774,1029,774,1029,775,1029,782,1029,788,1029,791,1029,793,1032,793,1033,794,1033,800,1033,805,1031,807,1030,809,1029,810,1029,810,1029,809,1025,810,1018,810,1017,810,1017,810,1016,811,1015,812,1014,813,1014,814,1014,815,1013,818,1010,821,1008,822,1008,822,1007,822,995,823,983,823,981,824,979,826,974,826,968,827,960,827,953,827,948,831,946,832,946,833,944,834,944,834,943,836,940,839,939,842,938,844,937,847,935,850,933,853,932,855,931,856,931,857,931,858,930,859,930,861,929,862,927,862,926,863,925,864,925,864,924,864,923,864,922,864,916,865,909,865,909,865,908,868,907,868,904,868,903,869,902,870,901,871,899,872,898,872,897,873,896,873,894,872,893,870,892,869,891,867,890,867,889,866,887,865,886,865,884,866,878,862,876,861,876,860,875,859,873,857,871,f,853,873,849,876,c]],label:"Slovenia",shortLabel:"SL",labelPosition:[78.8,108.2],labelAlignment:[t,m],labelConnectors:[[i,788,1082,j,788,997]]},"07":{outlines:[[i,1007,575,f,1004,575,1002,575,998,574,996,576,991,582,990,589,j,989,591,f,980,592,969,591,969,593,967,594,965,596,962,598,961,599,959,599,954,600,952,605,951,606,950,606,949,607,948,607,947,607,945,607,941,607,940,612,940,612,940,613,939,618,939,624,939,626,939,627,939,627,938,628,937,629,937,630,936,632,935,633,935,634,934,635,931,640,924,640,922,640,920,641,919,641,918,642,912,644,910,649,909,654,904,656,904,656,903,657,900,660,898,660,895,660,894,663,894,664,892,665,891,666,889,668,887,670,885,672,884,673,883,673,881,673,880,673,879,681,881,687,882,688,882,689,883,697,883,705,883,707,882,709,881,713,880,717,880,719,880,720,879,724,879,728,879,731,880,732,881,733,882,734,885,735,887,738,887,739,888,739,889,739,890,739,892,740,892,741,896,746,893,752,910,752,928,752,936,752,944,753,944,754,944,755,943,759,945,759,949,759,952,759,965,760,975,755,972,756,972,753,973,750,973,748,974,746,974,744,976,742,976,739,977,738,977,737,978,737,979,737,982,737,983,735,985,734,986,731,987,731,988,729,989,727,989,725,990,719,991,712,992,711,993,709,997,706,1002,703,1005,701,1009,701,1012,702,1015,701,1017,701,1018,699,1020,698,1022,697,1025,695,1027,693,1029,692,1030,691,1031,691,1031,690,1031,689,1030,687,1029,687,1029,685,1029,684,1032,684,1033,684,1034,683,1037,683,1039,683,1042,684,1043,682,1045,681,1047,679,1050,677,1053,675,1055,673,1055,668,1055,667,1055,665,1058,661,1061,658,1062,657,1064,655,1069,651,1074,648,1078,645,1080,642,1081,640,1081,639,1082,637,1083,636,1084,635,1085,634,1085,633,1086,632,1086,631,1087,631,1089,629,1093,628,1095,627,1098,627,1100,627,1103,626,1105,626,1107,624,1109,623,1112,622,1113,622,1115,621,1116,621,1117,620,1122,615,1126,611,1129,609,1132,607,1133,607,1133,605,1133,605,1133,604,1142,606,1151,611,1154,613,1158,615,1162,617,1166,621,1167,622,1168,622,1169,622,1169,622,1181,623,1192,620,1192,620,1193,620,1193,618,1193,615,1193,613,1192,612,1191,607,1192,599,1192,598,1192,597,1193,595,1193,593,1194,592,1194,592,1195,589,1195,587,1195,584,1195,580,1194,570,1199,564,1200,564,1200,563,1202,563,1202,562,1204,562,1205,561,1206,560,1207,559,1208,558,1208,557,1209,552,1209,548,1210,547,1209,546,1210,545,1210,544,1210,542,1207,542,1206,543,1204,542,1203,542,1200,542,1190,542,1179,542,1168,542,1158,540,1155,540,1155,538,1155,534,1153,533,1152,532,1150,532,1139,532,1128,531,1122,531,1117,533,1115,534,1113,534,1111,534,1111,535,1109,539,1105,543,1103,545,1098,544,1097,544,1096,545,1094,547,1093,548,1092,549,1091,550,1089,553,1087,554,1086,555,1086,555,1086,560,1083,560,1082,560,1080,560,1079,562,1077,562,1066,563,1055,563,1052,563,1048,562,1045,562,1043,564,1042,566,1041,567,1041,568,1041,569,1040,577,1040,585,1040,587,1039,587,1032,589,1024,589,1023,589,1022,589,1022,588,1021,587,1021,586,1021,585,1021,580,1017,579,1016,579,1016,578,1015,576,1013,575,f,1010,575,1007,575,c]],label:"Slovakia",shortLabel:"SK",labelPosition:[126.5,58.2],labelAlignment:[b,v],labelConnectors:[[i,1265,582,j,1148,582]]},"06":{outlines:[[i,1123,41,f,1123,37,1120,37,1119,37,1117,37,1112,37,1106,37,1105,37,1105,36,1103,31,1097,31,1092,32,1088,30,1087,29,1085,29,1082,27,1082,25,1080,27,1079,28,1077,29,1076,30,1069,33,1063,37,1062,38,1061,39,1060,39,1060,40,1060,41,1059,41,1057,46,1053,47,1052,48,1051,48,1050,49,1049,50,1045,51,1040,53,1039,54,1037,54,1034,54,1032,55,1030,58,1027,61,1026,62,1025,62,1012,62,999,62,998,62,996,63,995,64,994,67,994,69,993,69,990,70,987,70,983,70,981,71,980,72,979,72,971,73,963,73,j,962,73,f,962,78,961,81,960,82,960,83,959,84,956,85,956,85,955,85,942,85,928,86,913,86,897,87,902,87,900,92,899,96,902,96,898,96,894,96,893,96,891,97,890,97,889,99,887,101,885,104,885,105,884,106,882,106,879,107,878,107,877,107,874,106,874,109,874,113,876,114,876,114,875,114,869,115,864,116,866,111,862,109,862,109,861,109,856,108,850,109,846,109,842,106,842,106,842,105,840,102,838,102,837,101,837,99,j,837,98,f,833,97,829,97,828,97,827,97,826,95,826,93,827,90,824,89,823,89,823,90,820,91,817,92,817,91,817,90,819,81,810,82,j,809,82,f,808,78,808,73,808,72,808,72,805,71,801,72,799,72,799,70,799,66,799,62,799,61,799,61,796,60,793,60,788,60,782,60,780,60,780,61,780,63,780,64,780,66,780,68,779,68,778,69,778,69,777,69,774,69,771,69,765,69,759,71,759,71,758,71,754,72,757,75,760,78,756,79,756,78,754,77,752,76,748,76,748,77,749,78,749,78,750,80,751,84,753,85,747,84,741,87,740,88,739,88,735,89,736,90,734,90,732,91,731,91,730,91,728,92,729,95,730,99,728,100,727,101,726,101,723,101,720,102,719,102,719,103,718,105,718,107,718,109,718,111,717,117,712,117,707,117,702,117,698,116,697,118,697,119,697,119,696,123,697,127,697,131,696,131,695,131,694,131,692,130,689,130,685,129,686,133,686,136,687,138,688,143,688,147,j,688,148,f,683,149,678,149,677,149,677,150,676,151,676,152,676,156,677,158,671,158,664,158,663,158,663,159,662,162,662,165,662,167,662,167,660,168,658,168,648,168,637,169,636,169,636,170,635,171,635,173,635,174,635,174,632,175,628,175,622,174,619,176,j,618,176,f,617,180,617,184,618,187,614,187,612,186,609,187,608,192,608,196,j,608,197,f,604,198,600,198,600,200,601,201,601,202,601,202,602,208,600,213,598,218,596,222,596,224,595,226,596,230,599,234,599,234,600,234,604,234,608,234,607,239,606,243,605,244,605,245,605,249,605,253,611,251,616,254,617,254,617,255,618,260,616,261,615,262,615,263,614,267,614,270,614,275,609,274,603,273,604,279,605,281,606,281,608,284,606,287,606,288,604,288,601,287,599,289,599,289,598,290,597,290,597,290,594,293,595,297,595,300,595,303,595,308,597,310,597,311,598,311,600,312,602,313,606,315,613,314,618,313,617,319,617,322,616,325,616,329,618,330,621,332,624,333,626,333,626,333,627,335,627,337,628,342,628,347,628,349,629,351,630,352,632,352,632,352,633,352,635,353,638,353,639,354,639,354,641,355,641,358,640,362,640,367,640,371,641,373,642,374,642,375,642,378,647,379,648,379,649,381,649,382,649,383,651,388,651,394,651,396,652,396,653,397,654,397,657,397,660,398,660,398,660,399,660,404,661,409,661,410,661,410,662,412,663,413,663,415,664,416,665,417,665,419,664,426,670,426,674,426,678,428,679,429,680,429,682,429,683,430,684,431,685,433,686,438,688,442,689,442,689,442,692,443,694,443,695,444,695,444,698,446,697,450,697,454,697,458,696,462,698,465,699,468,701,469,702,469,703,470,705,470,705,473,704,476,704,479,704,483,705,485,706,485,707,485,719,485,730,486,732,486,734,486,737,487,740,487,743,487,742,490,740,496,744,497,746,498,748,498,752,498,756,499,757,499,758,500,759,501,759,502,762,504,763,509,764,510,764,510,768,510,773,510,777,510,778,515,778,523,783,528,784,529,785,529,792,529,795,533,796,534,796,534,797,536,798,537,799,538,800,538,809,538,817,538,814,538,815,534,816,531,815,528,814,527,814,525,814,524,817,524,822,524,827,524,829,524,830,523,830,523,830,522,830,517,834,517,835,517,835,517,838,514,843,515,846,515,849,516,851,516,852,516,854,517,855,517,858,517,860,520,862,523,863,527,864,527,864,528,865,529,865,529,866,530,866,530,867,532,867,533,867,535,869,536,869,537,869,538,869,541,870,544,870,546,873,546,877,545,882,545,883,545,884,546,884,547,884,548,884,553,886,556,887,557,888,557,889,557,889,557,893,558,898,558,901,558,902,556,904,555,904,553,904,549,904,545,904,544,907,544,910,544,913,544,915,544,917,545,919,546,919,547,921,549,921,552,923,552,924,553,925,554,925,554,926,555,927,555,935,555,943,556,955,556,967,554,j,969,554,f,970,571,970,588,970,590,969,591,j,969,591,f,980,592,989,591,j,990,589,f,991,582,996,576,998,574,1002,575,1004,575,1007,575,1010,575,1013,575,1015,576,1016,578,1016,579,1017,579,1021,580,1021,585,1021,586,1021,587,1022,588,1022,589,1023,589,1024,589,1032,589,1039,587,1040,587,1040,585,1040,577,1041,569,1041,568,1041,567,1042,566,1043,564,1045,562,1048,562,1052,563,1055,563,1066,563,1077,562,1079,562,1080,560,1082,560,1083,560,1086,560,1086,555,1086,555,1087,554,1089,553,1091,550,1092,549,1093,548,1094,547,1096,545,1097,544,1098,544,1103,545,1105,543,1109,539,1111,535,1111,534,1113,534,1115,534,1117,533,1122,531,1128,531,1139,532,1150,532,1152,532,1153,533,1155,534,1155,538,1155,540,1158,540,1168,542,1179,542,1190,542,1200,542,1203,542,1204,542,1206,543,1207,542,1210,542,1210,544,1210,545,1209,546,1217,547,1222,547,1222,547,1223,547,1221,543,1221,537,1222,531,1221,525,1221,525,1219,524,1219,524,1218,523,1217,518,1219,515,1220,514,1221,513,1222,512,1223,510,1222,510,1222,509,1221,509,1220,508,1219,506,1216,504,1215,504,1214,503,1213,502,1212,501,1210,500,1210,498,1210,491,1212,484,1213,483,1213,482,1213,479,1214,477,1214,476,1214,474,1214,469,1215,464,1215,464,1215,463,1215,461,1216,459,1217,457,1218,455,1219,454,1220,453,1221,452,1222,451,1225,448,1225,443,1224,439,1224,435,1224,429,1226,423,1227,422,1228,422,1229,421,1229,421,1231,420,1232,420,1235,419,1235,414,1234,411,1235,408,1235,405,1235,403,1235,399,1236,395,1236,395,1237,394,1237,394,1238,393,1239,392,1239,392,1241,389,1241,385,1241,385,1241,384,1242,383,1242,382,1241,377,1243,374,1244,372,1245,370,1246,369,1246,367,1247,366,1247,364,1247,351,1247,337,1241,337,1240,334,1240,334,1239,333,1238,333,1237,332,1237,332,1236,330,1236,330,1235,329,1235,329,1234,328,1233,327,1232,327,1226,327,1225,322,1225,319,1220,318,1219,318,1217,317,1213,314,1211,312,1209,309,1209,303,1209,302,1209,300,1207,297,1203,295,1202,295,1202,294,1201,293,1201,292,1200,286,1200,280,1200,270,1200,259,j,1199,258,f,1194,258,1189,257,1189,257,1188,257,1188,251,1188,244,1188,242,1187,241,1184,239,1183,237,1182,236,1182,236,1176,235,1170,233,1169,232,1168,231,1167,229,1167,227,1167,217,1167,208,1167,207,1168,206,1169,205,1170,204,1172,202,1173,200,1174,197,1174,194,1174,189,1177,187,1177,186,1178,185,1179,184,1180,183,1182,182,1182,181,1183,177,1181,173,1181,172,1181,170,1180,166,1180,163,1179,157,1180,150,1180,144,1174,145,1173,145,1173,145,1172,143,1172,140,1172,139,1171,138,1171,137,1170,137,1170,136,1169,136,1166,135,1163,135,1162,135,1161,135,1160,134,1160,133,1160,131,1159,130,1157,129,1155,128,1154,127,1152,126,1147,124,1148,117,1148,112,1148,107,1148,104,1147,103,1145,102,1143,101,1142,101,1141,100,1139,98,1139,94,1139,93,1139,92,1139,91,1138,90,1138,86,1137,82,1137,80,1136,79,1133,78,1130,78,1129,78,1128,77,1126,77,1126,73,1127,70,1127,68,1128,64,1125,62,1121,59,1122,54,1122,52,1121,49,1120,44,1123,42,j,1123,42,f,1123,42,1123,41,c]],label:"Poland",shortLabel:"PL",labelPosition:[89.4,33.1],labelAlignment:[t,v]},"03":{outlines:[[i,594,226,f,593,226,593,226,592,224,592,221,591,216,584,216,583,216,582,217,581,219,581,221,581,224,580,226,580,228,579,229,577,230,573,230,565,230,558,231,558,227,559,223,559,221,557,220,551,220,545,220,j,544,220,f,543,216,543,212,j,543,211,f,532,210,520,210,501,210,481,210,j,480,210,f,480,205,479,201,j,478,200,f,470,199,461,201,449,201,436,201,433,201,429,201,423,200,415,200,419,203,417,208,416,210,415,212,415,214,414,214,403,216,392,216,391,216,391,216,390,213,390,209,j,390,208,f,386,207,382,207,381,207,381,207,380,206,380,204,379,202,379,199,380,197,378,196,375,195,370,194,369,194,369,195,368,198,368,201,j,368,202,f,364,203,360,203,358,203,355,204,348,205,349,198,349,197,349,197,346,196,342,196,341,196,339,196,337,195,334,196,330,196,330,193,331,190,330,187,329,186,329,186,326,185,323,186,321,186,321,184,318,184,317,187,317,188,317,188,317,191,318,193,312,193,306,193,j,305,193,f,305,189,301,189,300,189,298,189,297,188,297,184,j,297,183,f,293,182,289,182,284,182,278,182,275,181,271,182,269,182,269,180,270,174,266,171,265,171,263,171,261,171,258,171,258,177,259,181,259,182,259,182,262,189,261,197,261,202,266,204,267,204,267,205,268,208,268,211,268,217,268,222,268,225,269,226,271,228,275,228,276,228,276,228,277,232,277,235,277,237,277,239,276,241,272,240,271,240,270,241,269,241,268,241,265,242,265,244,266,246,269,246,272,245,274,246,275,246,275,246,276,246,277,247,280,250,285,252,286,253,286,253,288,259,286,263,286,265,285,265,276,266,267,266,266,266,265,266,264,265,260,265,259,265,258,265,253,267,253,273,253,276,252,278,252,278,251,278,250,278,249,279,248,279,245,279,241,279,242,282,242,284,243,286,243,287,243,287,243,289,244,290,244,295,247,298,249,300,252,303,253,304,253,304,253,310,253,315,253,319,250,319,248,319,246,319,246,319,245,319,242,319,241,317,241,317,241,316,240,313,240,309,240,308,240,308,239,307,239,307,238,306,235,306,j,234,306,f,233,311,233,315,231,314,226,314,221,315,217,311,216,311,216,310,215,308,215,306,216,300,214,293,214,292,213,292,206,291,198,291,180,291,161,290,159,294,158,298,157,306,157,315,157,318,153,318,153,319,154,320,154,321,155,321,157,323,159,324,160,324,160,324,161,324,162,325,163,326,167,327,166,333,170,337,171,339,171,341,170,346,168,350,166,353,165,357,165,358,165,359,165,368,166,376,166,377,166,378,162,380,159,383,157,385,154,389,153,390,153,391,152,394,152,397,152,401,153,402,154,403,154,403,155,407,157,408,158,409,158,409,159,413,162,412,165,412,165,413,165,414,165,415,165,424,166,433,166,441,163,448,163,449,162,449,158,449,154,449,153,449,153,450,152,450,152,451,152,452,151,452,147,453,142,453,j,141,453,f,140,457,140,461,j,140,462,f,136,463,132,463,j,131,463,f,130,468,130,473,130,474,130,475,128,476,124,477,122,478,120,479,119,479,117,480,115,481,115,482,115,485,115,488,115,494,115,500,114,509,124,511,124,520,126,528,120,527,115,529,j,114,529,f,113,537,113,544,113,545,113,546,111,548,112,553,113,561,111,567,111,569,111,572,111,572,111,573,111,575,111,576,112,581,116,581,120,582,122,583,124,584,124,586,124,591,124,596,125,601,129,600,133,600,136,601,136,601,136,602,137,608,135,611,134,611,134,612,134,615,133,618,133,621,129,621,128,621,127,621,124,622,121,624,120,624,120,625,119,625,119,626,120,637,118,646,118,648,118,649,117,652,116,654,116,654,115,654,113,655,110,656,109,656,109,659,109,660,110,661,110,661,111,661,117,661,120,662,122,663,123,664,123,666,125,666,126,666,126,666,129,666,132,667,138,669,139,676,139,678,139,679,139,683,140,686,140,686,141,686,144,687,144,690,144,694,146,697,146,698,146,699,146,702,145,705,145,705,144,705,148,708,151,711,153,714,154,716,154,717,154,717,157,722,160,724,160,724,161,725,161,725,161,726,162,728,163,730,164,733,164,735,165,737,168,737,169,737,170,737,174,739,179,739,180,739,181,739,194,745,208,745,216,744,224,744,227,744,230,745,231,745,232,746,235,749,239,749,240,751,241,752,243,755,248,755,251,754,254,754,268,754,281,755,282,755,282,756,284,760,283,764,283,766,281,766,278,765,276,766,275,766,274,766,276,769,278,773,278,773,278,774,278,780,277,786,j,276,786,f,271,786,267,788,266,788,266,789,268,798,267,808,267,813,266,818,j,265,818,f,261,818,256,819,256,819,255,819,252,827,248,833,247,834,247,835,246,841,246,848,246,857,246,865,246,874,246,883,246,885,245,887,244,891,244,894,243,895,243,896,246,897,249,895,250,894,251,894,260,894,269,895,270,899,270,902,270,904,272,904,277,903,281,904,283,904,285,905,286,905,286,905,287,905,287,905,289,901,291,896,291,895,291,893,291,892,291,889,295,889,299,889,300,890,301,890,304,890,306,890,321,890,336,888,336,888,336,886,335,883,338,883,348,883,359,882,j,359,880,f,359,875,366,876,368,876,370,877,370,877,371,877,377,875,381,878,385,879,389,879,392,879,396,879,398,880,399,880,400,880,401,880,405,881,406,882,407,883,408,883,414,883,418,885,419,885,420,886,424,887,423,893,423,894,423,895,423,895,424,895,434,895,444,894,j,444,893,f,443,889,447,886,447,886,448,886,449,885,450,885,460,885,469,884,470,884,470,883,470,880,471,879,472,878,471,877,471,872,474,872,499,873,524,872,526,872,527,870,530,867,531,864,532,862,537,862,541,863,544,863,550,863,555,863,558,863,558,860,559,860,559,859,560,856,560,853,560,851,560,849,560,847,563,847,567,847,570,847,589,847,607,846,608,846,609,846,616,844,623,844,625,844,628,843,630,842,631,841,632,841,632,839,633,834,630,830,629,829,628,828,626,825,623,822,622,822,621,820,621,819,620,819,619,818,619,817,619,814,618,812,617,806,614,803,613,802,612,802,606,797,600,794,599,794,599,793,599,788,602,786,603,786,603,784,604,784,604,783,604,782,604,780,605,770,614,767,616,767,617,766,621,763,624,760,626,759,627,758,629,757,630,756,631,756,631,755,634,748,642,744,646,742,649,739,652,737,655,736,657,736,657,734,660,730,664,727,665,727,666,726,668,724,670,722,671,722,671,721,671,721,671,720,672,719,672,718,673,715,674,714,674,713,674,712,675,709,672,709,670,709,668,707,667,707,666,706,666,705,664,705,663,704,662,703,662,703,660,702,657,702,653,701,650,700,648,700,641,698,634,700,631,700,629,698,628,697,627,697,621,694,616,691,615,691,615,689,614,687,613,686,613,685,612,684,606,680,603,678,598,677,596,672,596,671,595,670,593,669,592,668,591,666,590,664,589,662,588,660,584,655,582,652,581,651,580,650,580,649,579,648,578,648,577,647,576,647,575,646,574,645,573,644,570,642,567,640,566,639,565,638,564,638,563,637,562,637,560,636,558,634,556,632,555,629,554,628,551,622,549,615,548,609,546,605,546,605,546,604,545,603,544,602,543,600,542,598,539,595,537,592,536,591,535,591,532,589,533,584,534,578,540,578,545,577,548,574,549,574,549,573,549,572,550,570,550,570,550,569,554,562,562,562,566,562,569,561,571,561,572,559,576,555,582,551,584,550,585,549,590,548,593,545,594,544,595,543,596,542,598,541,599,541,599,540,604,537,608,532,609,531,610,530,616,526,623,525,627,524,631,522,632,522,633,520,634,517,638,515,639,515,639,514,640,514,640,513,641,512,642,512,645,508,647,506,648,505,649,505,650,505,650,505,654,504,654,502,655,498,658,494,660,491,664,489,665,488,666,487,667,487,668,487,675,487,682,488,682,488,682,489,682,494,685,494,691,494,697,493,697,493,698,492,699,490,701,489,702,488,702,487,703,486,705,485,704,483,704,479,704,476,705,473,705,470,703,470,702,469,701,469,699,468,698,465,696,462,697,458,697,454,697,450,698,446,695,444,695,444,694,443,692,443,689,442,689,442,688,442,686,438,685,433,684,431,683,430,682,429,680,429,679,429,678,428,674,426,670,426,664,426,665,419,665,417,664,416,663,415,663,413,662,412,661,410,661,410,661,409,660,404,660,399,660,398,660,398,657,397,654,397,653,397,652,396,651,396,651,394,651,388,649,383,649,382,649,381,648,379,647,379,642,378,642,375,642,374,641,373,640,371,640,367,640,362,641,358,641,355,639,354,639,354,638,353,635,353,633,352,632,352,632,352,630,352,629,351,628,349,628,347,628,342,627,337,627,335,626,333,626,333,624,333,621,332,618,330,616,329,616,325,617,322,617,319,618,313,613,314,606,315,602,313,600,312,598,311,597,311,597,310,595,308,595,303,595,300,595,297,594,293,597,290,597,290,598,290,599,289,599,289,601,287,604,288,606,288,606,287,608,284,606,281,605,281,604,279,603,273,609,274,614,275,614,270,614,267,615,263,615,262,616,261,618,260,617,255,617,254,616,254,611,251,605,253,605,249,605,245,605,244,606,243,607,239,608,234,604,234,600,234,599,234,599,234,596,230,595,226,f,595,226,594,226,c]],label:"Germany",shortLabel:"DE",labelPosition:[36.7,53.8],labelAlignment:[t,v]},"09":{outlines:[[i,371,877,f,370,877,370,877,368,876,366,876,359,875,359,880,j,359,882,f,348,883,338,883,335,883,336,886,336,888,336,888,321,890,306,890,304,890,301,890,300,890,299,889,295,889,291,889,291,892,291,893,291,895,291,896,289,901,287,905,287,905,286,905,286,905,285,905,283,904,281,904,277,903,272,904,270,904,270,902,270,899,269,895,260,894,251,894,250,894,249,895,246,897,243,896,243,900,242,904,242,905,240,905,240,906,239,906,238,907,236,907,233,907,231,909,229,911,226,913,223,916,219,919,218,920,218,920,216,923,213,926,211,927,208,928,206,928,205,930,204,932,203,933,201,936,199,938,197,940,195,942,194,943,193,943,189,945,190,949,190,953,188,957,185,962,181,965,177,968,173,972,173,973,173,974,173,984,172,994,172,995,170,996,169,997,168,999,168,1000,167,1001,165,1002,163,1003,163,1004,162,1005,162,1006,161,1007,158,1009,155,1013,154,1014,153,1014,150,1017,149,1019,149,1021,149,1022,149,1028,149,1034,150,1035,150,1035,150,1037,150,1038,149,1044,155,1043,158,1043,160,1043,161,1044,161,1044,163,1044,164,1044,167,1045,167,1042,168,1039,171,1038,171,1038,172,1037,172,1036,173,1035,173,1034,174,1033,175,1032,176,1031,177,1031,178,1030,179,1028,181,1027,182,1027,183,1026,183,1026,184,1026,185,1025,186,1024,186,1023,186,1022,186,1017,191,1017,195,1018,199,1018,203,1018,206,1022,208,1025,213,1026,214,1026,215,1026,217,1027,219,1027,225,1026,228,1029,228,1030,228,1030,229,1032,229,1033,230,1034,230,1035,230,1038,230,1040,230,1047,231,1053,231,1054,231,1054,232,1054,233,1054,245,1054,258,1054,258,1054,259,1053,261,1053,263,1052,265,1052,266,1050,269,1047,274,1045,276,1044,278,1042,279,1042,280,1041,281,1041,281,1041,285,1039,289,1039,293,1039,297,1038,298,1038,299,1037,300,1036,301,1035,303,1035,303,1034,304,1033,304,1032,305,1031,305,1030,305,1029,305,1028,306,1025,307,1024,308,1023,309,1022,310,1019,312,1017,313,1016,315,1015,318,1014,321,1011,322,1010,323,1010,327,1009,331,1011,332,1012,333,1012,337,1013,341,1015,343,1016,344,1016,347,1018,348,1023,348,1025,350,1026,350,1027,351,1027,352,1029,353,1029,363,1037,375,1036,376,1036,376,1035,377,1035,378,1034,380,1033,382,1030,382,1030,382,1029,383,1028,383,1027,383,1024,383,1023,384,1021,384,1019,384,1013,384,1008,385,1007,386,1006,387,1005,389,1004,391,1003,393,1002,399,998,405,1002,409,1004,411,1006,412,1007,413,1007,418,1007,421,1003,423,1001,426,1000,427,999,428,998,429,996,431,996,434,997,436,997,441,997,443,1001,445,1004,446,1005,447,1006,448,1007,450,1009,452,1013,452,1014,452,1014,453,1016,453,1017,454,1018,456,1020,457,1021,459,1022,461,1023,464,1024,467,1025,468,1022,469,1021,469,1019,469,1011,468,1003,468,1002,466,1002,464,1000,462,998,462,997,460,995,458,993,458,989,458,988,459,987,461,986,463,985,468,983,467,977,467,976,468,975,470,973,473,971,474,970,475,969,476,969,476,968,478,967,478,966,479,966,479,964,479,962,480,960,480,959,481,958,481,957,481,957,481,949,481,942,480,934,482,930,483,929,483,928,481,927,481,925,481,925,481,924,481,924,480,924,478,926,475,929,475,930,474,931,472,931,469,931,464,931,459,929,458,928,457,928,454,927,451,928,450,928,449,928,448,928,447,929,446,929,445,929,441,930,437,931,432,931,426,932,423,932,423,929,423,928,422,928,421,925,416,923,416,923,415,923,414,922,413,922,410,920,406,919,405,918,404,918,403,917,404,914,404,912,405,910,406,908,405,908,404,908,403,907,402,907,400,905,399,902,394,903,393,903,392,902,391,902,391,900,391,899,391,898,391,894,386,895,385,895,385,895,384,892,383,890,382,890,381,890,370,891,371,879,f,371,878,371,877,c]],label:"Switzerland",shortLabel:"CH",labelPosition:[31.6,96.5],labelAlignment:[t,v]},"02":{outlines:[[i,834,517,f,830,517,830,522,830,523,830,523,829,524,827,524,822,524,817,524,814,524,814,525,814,527,815,528,816,531,815,534,814,538,817,538,809,538,800,538,799,538,798,537,797,536,796,534,796,534,795,533,792,529,785,529,784,529,783,528,778,523,778,515,777,510,773,510,768,510,764,510,764,510,763,509,762,504,759,502,759,501,758,500,757,499,756,499,752,498,748,498,746,498,744,497,740,496,742,490,743,487,740,487,737,487,734,486,732,486,730,486,719,485,707,485,706,485,705,485,703,486,702,487,702,488,701,489,699,490,698,492,697,493,697,493,691,494,685,494,682,494,682,489,682,488,682,488,675,487,668,487,667,487,666,487,665,488,664,489,660,491,658,494,655,498,654,502,654,504,650,505,650,505,649,505,648,505,647,506,645,508,642,512,641,512,640,513,640,514,639,514,639,515,638,515,634,517,633,520,632,522,631,522,627,524,623,525,616,526,610,530,609,531,608,532,604,537,599,540,599,541,598,541,596,542,595,543,594,544,593,545,590,548,585,549,584,550,582,551,576,555,572,559,571,561,569,561,566,562,562,562,554,562,550,569,550,570,550,570,549,572,549,573,549,574,548,574,545,577,540,578,534,578,533,584,532,589,535,591,536,591,537,592,539,595,542,598,543,600,544,602,545,603,546,604,546,605,546,605,548,609,549,615,551,622,554,628,555,629,556,632,558,634,560,636,562,637,563,637,564,638,565,638,566,639,567,640,570,642,573,644,574,645,575,646,576,647,577,647,578,648,579,648,580,649,580,650,581,651,582,652,584,655,588,660,589,662,590,664,591,666,592,668,593,669,595,670,596,671,596,672,598,677,603,678,606,680,612,684,613,685,613,686,614,687,615,689,615,691,616,691,621,694,627,697,628,697,629,698,631,700,634,700,641,698,648,700,650,700,653,701,657,702,660,702,662,703,662,703,663,704,664,705,666,705,666,706,667,707,668,707,670,709,672,709,675,709,674,712,674,713,674,714,673,715,672,718,672,719,671,720,671,721,671,721,679,722,684,723,684,723,685,724,686,729,692,728,695,728,698,728,700,728,702,727,702,732,702,737,702,739,705,738,710,738,714,738,727,738,739,736,739,736,739,734,739,726,740,718,740,716,743,716,745,717,748,717,746,715,747,712,748,705,749,699,750,695,754,691,755,691,756,690,757,689,758,689,777,689,795,689,799,689,802,688,804,688,804,687,807,684,811,681,814,677,817,676,818,675,819,675,826,677,833,679,836,680,837,682,838,683,839,683,850,683,859,681,860,681,860,679,861,676,863,675,865,674,867,674,873,674,880,674,881,673,883,673,884,673,885,672,887,670,889,668,891,666,892,665,894,664,894,663,895,660,898,660,900,660,903,657,904,656,904,656,909,654,910,649,912,644,918,642,919,641,920,641,922,640,924,640,931,640,934,635,935,634,935,633,936,632,937,630,937,629,938,628,939,627,939,627,939,626,939,624,939,618,940,613,940,612,940,612,941,607,945,607,947,607,948,607,949,607,950,606,951,606,952,605,954,600,959,599,961,599,962,598,965,596,967,594,969,593,969,592,j,969,591,f,970,590,970,588,970,571,969,554,j,967,554,f,955,556,943,556,935,555,927,555,926,555,925,554,925,554,924,553,923,552,921,552,921,549,919,547,919,546,917,545,915,544,913,544,910,544,907,544,904,544,904,545,904,549,904,553,904,555,902,556,901,558,898,558,893,558,889,557,889,557,888,557,887,557,886,556,884,553,884,548,884,547,884,546,883,545,882,545,877,545,873,546,870,546,870,544,869,541,869,538,869,537,869,536,867,535,867,533,867,532,866,530,866,530,865,529,865,529,864,528,864,527,863,527,862,523,860,520,858,517,855,517,854,517,852,516,851,516,849,516,846,515,843,515,838,514,835,517,f,835,517,834,517,c]],label:"CzechRepublic",shortLabel:"CZ",labelPosition:[74.1,61.1],labelAlignment:[t,v]},"01":{outlines:[[i,867,674,f,865,674,863,675,861,676,860,679,860,681,859,681,850,683,839,683,838,683,837,682,836,680,833,679,826,677,819,675,818,675,817,676,814,677,811,681,807,684,804,687,804,688,802,688,799,689,795,689,777,689,758,689,757,689,756,690,755,691,754,691,750,695,749,699,748,705,747,712,746,715,748,717,745,717,743,716,740,716,740,718,739,726,739,734,739,736,739,736,727,738,714,738,710,738,705,738,702,739,702,737,702,732,702,727,700,728,698,728,695,728,692,728,686,729,685,724,684,723,684,723,679,722,671,721,671,722,670,722,668,724,666,726,665,727,664,727,660,730,657,734,657,736,655,736,652,737,649,739,646,742,642,744,634,748,631,755,631,756,630,756,629,757,627,758,626,759,624,760,621,763,617,766,616,767,614,767,605,770,604,780,604,782,604,783,604,784,603,784,603,786,602,786,599,788,599,793,599,794,600,794,606,797,612,802,613,802,614,803,617,806,618,812,619,814,619,817,619,818,620,819,621,819,621,820,622,822,623,822,626,825,628,828,629,829,630,830,633,834,632,839,632,841,631,841,630,842,628,843,625,844,623,844,616,844,609,846,608,846,607,846,589,847,570,847,567,847,563,847,560,847,560,849,560,851,560,853,560,856,559,859,559,860,558,860,558,863,555,863,550,863,544,863,541,863,537,862,532,862,531,864,530,867,527,870,526,872,524,872,499,873,474,872,471,872,471,877,472,878,471,879,470,880,470,883,470,884,469,884,460,885,450,885,449,885,448,886,447,886,447,886,443,889,444,893,j,444,894,f,434,895,424,895,423,895,423,895,422,895,422,895,423,900,427,903,424,903,422,903,421,903,419,903,414,905,408,904,404,904,404,908,405,909,404,910,404,912,404,914,403,917,404,918,405,918,406,919,410,920,413,922,414,922,415,923,416,923,416,923,421,925,422,928,423,928,423,929,423,932,426,932,432,931,437,931,441,930,445,929,446,929,447,929,448,928,449,928,450,928,451,928,454,927,457,928,458,928,459,929,464,931,469,931,472,931,474,931,475,930,475,929,478,926,480,924,481,924,481,924,485,923,488,923,491,923,491,926,492,930,495,931,497,932,499,933,503,934,506,934,514,934,521,934,j,523,934,f,526,934,528,934,529,934,529,934,528,931,525,928,527,926,530,926,538,927,544,925,546,924,547,924,547,924,548,923,551,917,558,915,559,914,560,914,567,914,574,915,574,916,574,917,575,919,577,921,579,923,582,923,583,923,584,922,587,922,588,920,589,920,589,919,592,917,593,912,593,911,594,911,596,910,597,910,602,910,607,912,608,912,608,914,608,916,608,918,608,920,612,919,618,918,617,924,615,931,620,933,626,935,632,935,636,934,640,934,642,934,644,935,647,936,649,936,654,938,660,938,666,938,672,937,672,937,673,937,676,936,678,935,679,935,679,934,678,932,676,930,674,929,674,925,674,922,678,921,679,921,679,921,681,920,682,920,696,922,710,922,735,922,760,921,762,921,763,919,767,917,768,913,768,912,769,912,774,909,779,905,782,903,783,898,783,898,784,898,791,898,798,897,799,897,799,897,806,895,814,895,810,894,810,889,810,883,817,884,828,885,838,882,842,881,846,879,847,879,847,878,848,877,849,876,853,873,857,871,861,870,864,869,862,864,862,858,863,853,863,848,864,847,864,845,866,844,866,842,867,841,867,839,867,837,869,835,871,832,873,830,875,827,875,822,874,819,874,817,874,816,873,814,872,813,872,812,871,811,870,810,866,808,863,805,862,804,861,803,861,802,860,801,859,801,859,799,859,791,860,783,869,782,878,782,889,783,890,773,890,770,890,767,889,760,891,755,892,754,892,753,j,892,752,f,892,752,893,752,896,746,892,741,892,740,890,739,889,739,888,739,887,739,887,738,885,735,882,734,881,733,880,732,879,731,879,728,879,724,880,720,880,719,880,717,881,713,882,709,883,707,883,705,883,697,882,689,882,688,881,687,879,681,880,673,f,873,674,867,674,c]],label:"Austria",shortLabel:"AT",labelPosition:[73.3,83.1],labelAlignment:[t,v]},"04":{outlines:[[i,1198,621,f,1196,619,1193,620,1192,620,1192,621,1181,623,1169,622,1169,622,1168,622,1167,622,1166,621,1162,617,1158,615,1154,613,1151,611,1142,606,1133,604,1133,605,1133,605,1133,607,1132,607,1129,609,1126,611,1122,615,1117,620,1116,621,1115,621,1113,622,1112,622,1109,623,1107,624,1105,626,1103,626,1100,627,1098,627,1095,627,1093,628,1089,629,1087,631,1086,631,1086,632,1085,633,1085,634,1084,635,1083,636,1082,637,1081,639,1081,640,1080,642,1078,645,1074,648,1069,651,1064,655,1062,657,1061,658,1058,661,1055,665,1055,667,1055,668,1055,673,1053,675,1050,677,1047,679,1045,681,1043,682,1042,684,1039,683,1037,683,1034,683,1033,684,1032,684,1029,684,1029,685,1029,687,1030,687,1031,689,1031,690,1031,691,1030,691,1029,692,1027,693,1025,695,1022,697,1020,698,1018,699,1017,701,1015,701,1012,702,1009,701,1005,701,1002,703,997,706,993,709,992,711,991,712,990,719,989,725,989,727,988,729,987,731,986,731,985,734,983,735,982,737,979,737,978,737,977,737,977,738,976,739,976,742,974,744,974,746,973,748,973,750,972,753,972,756,975,755,965,760,952,759,949,759,945,759,943,759,944,755,944,754,944,753,936,752,928,752,910,752,893,752,892,752,892,753,892,754,891,755,889,760,890,767,890,770,890,773,889,783,878,782,869,782,860,783,859,791,859,799,859,801,860,801,861,802,861,803,862,804,863,805,866,808,870,810,871,811,872,812,872,813,873,814,874,816,874,817,874,819,875,822,875,827,873,830,871,832,869,835,867,837,867,839,867,841,866,842,866,844,864,845,864,847,863,848,863,853,862,858,862,864,864,869,861,870,858,871,859,873,860,875,861,876,862,876,866,878,865,884,865,886,866,887,867,889,867,890,869,891,871,893,872,893,873,894,879,894,885,895,885,896,885,897,885,900,885,903,886,905,889,904,891,904,892,905,897,906,902,906,902,906,902,907,903,909,903,912,904,912,904,913,904,914,904,915,905,918,909,918,915,918,920,918,922,919,923,919,928,922,927,930,927,931,928,931,931,933,935,933,939,933,942,934,943,934,944,935,946,936,947,937,948,939,948,943,948,945,950,945,953,945,955,946,958,948,960,948,965,948,970,948,972,949,973,949,974,950,977,951,977,951,978,951,980,952,982,952,992,952,1002,951,1002,951,1003,950,1007,945,1012,943,1013,943,1014,943,1021,943,1028,943,1030,943,1031,942,1031,941,1031,939,1031,939,1032,938,1034,935,1033,930,1033,926,1037,925,1040,925,1041,923,1042,923,1043,923,1046,923,1049,923,1052,922,1053,920,1054,920,1054,920,1056,919,1056,917,1057,916,1058,915,1059,914,1059,913,1060,910,1063,910,1069,910,1075,907,1080,905,1084,903,1093,899,1095,893,1095,892,1095,892,1095,889,1097,888,1099,886,1101,883,1102,882,1103,882,1108,879,1114,878,1115,878,1115,877,1116,875,1116,874,1117,873,1117,872,1116,868,1120,869,1122,869,1123,869,1123,866,1123,864,1123,862,1128,862,1130,863,1133,863,1144,863,1155,861,1157,861,1159,859,1161,857,1162,855,1163,854,1164,853,1165,851,1168,851,1171,852,1174,852,1175,852,1175,851,1176,849,1176,847,1176,844,1177,842,1178,842,1179,842,1187,842,1195,839,1197,839,1198,835,1199,833,1200,830,1201,827,1201,824,1201,805,1201,785,1209,787,1215,789,1215,776,1216,762,1217,762,1218,762,1220,762,1221,761,1221,761,1221,759,1221,759,1221,758,1219,753,1217,748,1216,742,1215,735,j,1214,735,f,1213,734,1212,733,1212,732,1210,732,1210,732,1209,732,1209,728,1213,727,1216,726,1217,723,1217,722,1217,722,1218,721,1218,719,1218,713,1218,708,1219,708,1220,708,1222,709,1223,709,1229,710,1228,704,1227,700,1229,699,1231,698,1233,698,1237,699,1237,694,1236,691,1236,688,1236,685,1237,683,1238,683,1239,683,1243,683,1245,685,1249,677,1249,668,j,1250,668,f,1255,669,1254,664,1254,661,1254,658,1254,651,1254,644,1241,644,1228,644,1227,644,1226,644,1225,643,1225,642,1225,641,1224,639,1224,637,1223,634,1223,634,1223,633,1220,633,1218,632,1217,632,1217,632,1216,630,1216,628,1215,626,1214,624,1213,624,1213,623,1209,623,1205,623,1203,623,1201,624,f,1199,623,1198,621,c]],label:"Hungary",shortLabel:"HU",labelPosition:[104.6,81],labelAlignment:[t,v]}}}];
g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo);}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));
return;}n(w,x,n.geo);},[u,e],window]});}}}]);
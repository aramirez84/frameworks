<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Language=VBScript %>
<HTML>
<HEAD>	
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <TITLE>
	FusionCharts - Database + JavaScript Example
        </TITLE>
        <link href="../assets/ui/css/style.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="../assets/ui/js/jquery.min.js"></script>
        <script type="text/javascript" src="../assets/ui/js/lib.js"></script>
	
	<%
	'We've included ../Includes/FusionCharts.asp, which contains functions
	'to help us easily embed the charts.	
	%>
	<!-- #INCLUDE FILE="../Includes/FusionCharts.asp" -->
	<!-- #INCLUDE FILE="../Includes/DBConn.asp" -->
	
	<%
	'In this example, we show a combination of database + JavaScript (dataURL method)
	'rendering using FusionCharts.
	
	'The entire app (page) can be summarized as under. This app shows the break-down
	'of factory wise output generated. In a pie chart, we first show the sum of quantity
	'generated by each factory. These pie slices, when clicked would show detailed date-wise
	'output of that factory. The detailed data would be dynamically pulled by the column
	'chart from another ASP page. There are no page refreshes required. Everything
	'is done on one single page.
	
	'The XML data for the pie chart is fully created in ASP at run-time. ASP interacts
	'with the database and creates the XML for this.
	'Now, for the column chart (date-wise output report), each time we need the data
	'we dynamically submit request to the server with the appropriate factoryId. The server
	'responds with an XML document, which we accept and update chart at client side.
	%>	
	<SCRIPT LANGUAGE="Javascript" SRC="../../FusionCharts/FusionCharts.js">
	</SCRIPT>
	
	<SCRIPT LANGUAGE="JavaScript">
		
		/** 
		 * updateChart method is invoked when the user clicks on a pie slice.
		 * In this method, we get the index of the factory after which we request for XML data
		 * for that that factory from FactoryData.asp, and finally
		 * update the Column Chart.
		 *	@param	factoryIndex	Sequential Index of the factory.
		*/		
		function updateChart(factoryIndex){		
			//DataURL for the chart
			var strURL = "FactoryData.asp?factoryId=" + factoryIndex;
			
			//Sometimes, the above URL and XML data gets cached by the browser.
			//If you want your charts to get new XML data on each request,
			//you can add the following line:
			//strURL = strURL + "&currTime=" + getTimeForURL();
			//getTimeForURL method is defined below and needs to be included
			//This basically adds a ever-changing parameter which bluffs
			//the browser and forces it to re-load the XML data every time.
						
			//URLEncode it - NECESSARY.
			strURL = escape(strURL);
			
			//Get reference to chart object using Dom ID "FactoryDetailed"
			var chartObj = getChartFromId("FactoryDetailed");			
			//Send request for XML
			chartObj.setXMLUrl(strURL);
		}
		/**
		 * getTimeForURL method returns the current time 
		 * in a URL friendly format, so that it can be appended to
		 * dataURL for effective non-caching.
		*/
		function getTimeForURL(){
			var dt = new Date();
			var strOutput = "";
			strOutput = dt.getHours() + "_" + dt.getMinutes() + "_" + dt.getSeconds() + "_" + dt.getMilliseconds();
			return strOutput;
		}
	</SCRIPT>
        <!--[if IE 6]>
        <script type="text/javascript" src="../assets/ui/js/DD_belatedPNG_0.0.8a-min.js"></script>

<script>
          /* select the element name, css selector, background etc */
          DD_belatedPNG.fix('img');

          /* string argument can be any CSS selector */
        </script>
        <![endif]-->

        <style type="text/css">
            h2.headline {
                font: normal 110%/137.5% "Trebuchet MS", Arial, Helvetica, sans-serif;
                padding: 0;
                margin: 25px 0 25px 0;
                color: #7d7c8b;
                text-align: center;
            }
            p.small {
                font: normal 68.75%/150% Verdana, Geneva, sans-serif;
                color: #919191;
                padding: 0;
                margin: 0 auto;
                width: 664px;
                text-align: center;
            }
        </style>
</HEAD>
	
<BODY>

        <div id="wrapper">

            <div id="header">
                

               <div class="logo"><a class="imagelink"  href="http://www.fusioncharts.com/" target="_blank"><img src="../assets/ui/images/fusionchartsv3.2-logo.png" width="131" height="75" alt="FusionCharts XT logo" /></a></div>
                <h1 class="brand-name">FusionCharts XT</h1>
                <h1 class="logo-text">FusionCharts Database + JavaScript (dataURL method) Example</h1>
            </div>

            <div class="content-area">
                <div id="content-area-inner-main">
                    <h2 class="headline">Inter-connected charts - Click on any pie slice to see detailed chart below</h2>

                    <div class="gen-chart-render">
<%		
	'Initialize the Pie chart with sum of production for each of the factories	
	Dim oRs, oRs2, strQuery
	
	'strXML will be used to store the entire XML document generated
	Dim strXML 
	
	'Generate the chart element
	strXML = "<chart caption='Factory Output report' subCaption='By Quantity' pieSliceDepth='30' showBorder='1' formatNumberScale='0' numberSuffix=' Units' >"	
	
	'Create the recordset to retrieve data
	Set oRs = Server.CreateObject("ADODB.Recordset")

	'Iterate through each factory
	strQuery = "select * from Factory_Master"
	Set oRs = oConn.Execute(strQuery)
	
	While Not oRs.Eof		
		'Now create second recordset to get details for this factory
		Set oRs2 = Server.CreateObject("ADODB.Recordset")
		strQuery = "select FactoryId, sum(Quantity) as TotOutput from Factory_Output where FactoryId=" & ors("FactoryId") & " Group By FactoryId"
		Set oRs2 = oConn.Execute(strQuery)				
		'Generate <set label='..' value='..' link='..' />
		'Note that we're setting link as updateChart(factoryIndex) - JS Function
		strXML = strXML & "<set label='" & ors("FactoryName") & "' value='" & ors2("TotOutput") & "' link='javaScript:updateChart(" & oRs("FactoryId") & ")'/>"
		'Close recordset
		Set oRs2 = Nothing
		oRs.MoveNext
	Wend
	'Finally, close <chart> element
	strXML = strXML & "</chart>"
	Set oRs = nothing
	
	'Create the chart - Pie 3D Chart with data from strXML
	Call renderChart("../../FusionCharts/Pie3D.swf", "", strXML, "FactorySum", 500, 250, false, false)
%>
	<BR>
<%
	'Column 2D Chart with changed "No data to display" message
	'We initialize the chart with <chart></chart>
	Call renderChart("../../FusionCharts/Column2D.swf?ChartNoDataText=Please select a factory from pie chart above to view detailed data.", "", "<chart></chart>", "FactoryDetailed", 600, 250, false, false)
%>
                    </div>
                    <div class="clear"></div>
                    <p>&nbsp;</p>
                    <p class="small">The charts in this page have been dynamically generated using data contained in a database.</p>

                    <div class="underline-dull"></div>
                </div>
            </div>

            <div id="footer">
                <ul>
                    <li><a href="../index.html"><span>&laquo; Back to list of examples</span></a></li>
                    <li class="pipe">|</li>
                    <li><a href="../NoChart.html"><span>Unable to see the chart above?</span></a></li>
                </ul>
            </div>
        </div>
    </BODY>
</HTML>
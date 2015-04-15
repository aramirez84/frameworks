<HTML>
<HEAD>	
	<TITLE>
	FusionCharts - Database + JavaScript Example
	</TITLE>
	
<!---
'We've included ../Includes/FusionCharts.cfm, which contains functions
'to help us easily embed the charts.
--->
<cfinclude template="../Includes/FusionCharts.cfm">
	
<!---
	In this example, we show a combination of database + JavaScript (dataURL method)
	rendering using FusionCharts.
	
	The entire app (page) can be summarized as under. This app shows the break-down
	of factory wise output generated. In a pie chart, we first show the sum of quantity
	generated by each factory. These pie slices, when clicked would show detailed date-wise
	output of that factory. The detailed data would be dynamically pulled by the column
	chart from another CFM page. There are no page refreshes required. Everything
	is done on one single page.
	
	The XML data for the pie chart is fully created in CFM at run-time. CFM interacts
	with the database and creates the XML for this.
	Now, for the column chart (date-wise output report), each time we need the data
	we dynamically submit request to the server with the appropriate factoryId. The server
	responds with an XML document, which we accept and update chart at client side.
--->
	<SCRIPT LANGUAGE="Javascript" SRC="../../FusionCharts/FusionCharts.js">
	</SCRIPT>
	
	<SCRIPT LANGUAGE="JavaScript">
		
		/** 
		 * updateChart method is invoked when the user clicks on a pie slice.
		 * In this method, we get the index of the factory after which we request for XML data
		 * for that that factory from FactoryData.cfm, and finally
		 * update the Column Chart.
		 *	@param	factoryIndex	Sequential Index of the factory.
		*/		
		function updateChart(factoryIndex){		
			//DataURL for the chart
			var strURL = "FactoryData.cfm?factoryId=" + factoryIndex;
			
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
	<style type="text/css">
	<!--
	body {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 12px;
	}
	.text{
		font-family: Arial, Helvetica, sans-serif;
		font-size: 12px;
	}
	-->
	</style>
</HEAD>
	
<BODY>

<CENTER>
<h2>FusionCharts Database + JavaScript (dataURL method) Example</h2>
<h4>Inter-connected charts - Click on any pie slice to see detailed chart below.</h4>
<p>The charts in this page have been dynamically generated using data contained in a database.</p>
	<!--- Initialize the Pie chart with sum of production for each of the factories	--->

	<cfset strXML = "<chart caption='Factory Output report' subCaption='By Quantity' pieSliceDepth='30' showBorder='1' formatNumberScale='0' numberSuffix=' Units' >">
	
	<!--- Iterate through each factory --->
	<cfquery name="qry" datasource="dev">
		select * from Factory_Master
	</cfquery>
	
	<cfloop query="qry">
		<cfset factoryID = qry.FactoryId>
		<cfset factoryName = qry.FactoryName>
		<!--- Now get details for this factory --->
		<cfquery name="qryDetails" datasource="dev">
			select sum(Quantity) as TotOutput from Factory_Output where FactoryId=#factoryID#
		</cfquery>
		<!--- Generate <set label='..' value='..'/>	--->
		<cfset strXML = strXML & "<set label='#factoryName#' value='#qryDetails.totOutput#' link='javaScript:updateChart(" & factoryID & ")'/>">
	</cfloop>

	<!--- Finally, close <chart> element --->
	<cfset strXML = strXML & "</chart>">
	
	<!--- Create the chart - Pie 3D Chart with data from strXML --->
	<cfoutput>#renderChart("../../FusionCharts/Pie3D.swf", "", strXML, "FactorySum", 500, 250, false, false)#</cfoutput>
	<BR>

	<!---
	Column 2D Chart with changed "No data to display" message
	We initialize the chart with <chart></chart>
	--->
	<cfoutput>#renderChart("../../FusionCharts/Column2D.swf?ChartNoDataText=Please select a factory from pie chart above to view detailed data.", "", "<chart></chart>", "FactoryDetailed", 600, 250, false, false)#</cfoutput>
<BR><BR>
<a href='../NoChart.html' target="_blank">Unable to see the charts above?</a>
</CENTER>
</BODY>
</HTML>
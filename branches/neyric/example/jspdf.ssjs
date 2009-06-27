/**
 * v8cgi jsPDF example, rand0mbond@gmail.com
 *
 */
try {

	var jsPDF = require("./jspdf").jsPDF;

	var doc = new jsPDF();
	doc.text(20, 20, 'Hello world!');
	doc.text(20, 30, 'This is v8cgi Javascript, pumping out a PDF.');
	doc.addPage();
	doc.text(20, 20, 'Do you like that?');

	var pdf = doc.output();
	response.header({"Content-type" : "application/pdf"});
	response.write(pdf);

} catch(e) {
	response.write(e);
}

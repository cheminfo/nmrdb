<tr>
    <td class="left"></td>
    <td colspan="3">
        <div class="content">
            <h1 class="nmr">NMR resurrect</h1>
            <h2>
                <a href="../new_predictor/" style="font-size:16px; color: red;"><b>Try the new HTML5 only predictor that works also on iPad, Android, ... and does not require JAVA (only HTML5)!!!</b></a>
            </h2>


            This page allows to predict the spectrum from the chemical structure based on "Spinus". You may find more information on the authors <a href="http://www2.chemie.uni-erlangen.de/services/spinus/index.html" target="_blank">website</a>.<p>
                <br/>
                <b>References</b><br>
                            <ul>
                                <li>
                                    Banfi, D.; Patiny, L. <a target="_blank" href="http://dx.doi.org/10.2533/chimia.2008.280">www.nmrdb.org: Resurrecting and processing NMR spectra on-line</a> <i>Chimia</i>, <b>2008</b>, <i>62</i>(4), 280-281.
                                </li>
                                <li>
                                    Andrés M. Castillo, Luc Patiny and Julien Wist. <a href="http://dx.doi.org/10.1016/j.jmr.2010.12.008">Fast and Accurate Algorithm for the Simulation of NMR spectra of Large Spin Systems.</a> <em>Journal of Magnetic Resonance</em> <strong>2011. </strong>
                                </li>
                                <li>
                                    Aires-de-Sousa, M. Hemmer, J. Gasteiger, &#8220;<a target="_blank"
                                                                                       href="http://dx.doi.org/10.1021/ac010737m">Prediction
                                    of 1H NMR Chemical Shifts Using Neural Networks</a>&#8221;, <i>Analytical Chemistry</i>,
                                    <b>2002</b>, <i>74</i>(1), 80-90 most of the proton descriptors are
                                    explained. In that work they were used for the prediction of 1H NMR chemical
                                    shifts by counterpropagation neural networks.
                                </li>
                            </ul>



            <script language="javascript">

            //		var SIMULATOR_URL="/tools/predictor.cgi";
            var SIMULATOR_URL="http://www.nmrdb.org/service/predictor";

            var requester=null;


            function initializeRequester() {
                /* Even though the XMLHttpRequest object allows us to call the open() method multiple times,
                 each object can really only be used for one call, as the onreadystatechange event doesn't
                 update again once readyState changes to "4" (in Mozilla). Therefore, we have to create a new
                 XMLHttpRequest object every time we want to make a remote call.
                 */

                /* Check for running connections */
                if (requester != null && requester.readyState != 0 && requester.readyState != 4) {
                    requester.abort();
                }

                try {
                    requester = new XMLHttpRequest();
                } catch (error) {
                    try {
                        requester = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (error) {
                        requester = null;
                        return false;
                    }
                }
                return true;
            }


            var option = 1;
            function getPrediction(molfile,mode) {
                //castillo
                option=mode;
                molfile = document.nemo.canonizeMolfile(molfile);
                if (initializeRequester()) {
                    /* Changes in the readyState variable can be monitored using a special onreadystatechange listener,
                     so we'll need to set up a function to handle the event when the readyState is changed.
                     */

                    parameters="molfile="+escape(molfile);
                    requester.onreadystatechange = showPage;

                    requester.open('POST', SIMULATOR_URL, true);
                    requester.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    requester.setRequestHeader("Content-length", parameters.length);
                    requester.setRequestHeader("Connection", "close");
                    requester.send(parameters);
                } else {
                    alert("Unable to initialize Ajax");
                }
            }

            function showPage() {
                // 0   Uninitialised
                // 1   Loading
                // 2   Loaded
                // 3   Interactive
                // 4   Completed
                if (requester.readyState == 4) {
                    if (requester.status == 200) {


                        // we need to convert the answer to a inline assignment (ACS type) so that we can use it directly
                        var acsStyle="";
                        var tabStyle="";
                        var answer=requester.responseText;
                        document.form.tableformat.value=answer;

                        answer=answer.replace(/\n\r/g,"\r");
                        answer=answer.replace(/\n/g,"\r");
                        var lines=answer.split("\r");
// alert(answer);

                        // we will create the tab-delimited prediciton data
                        for (var i=0; i<(lines.length-1); i++) {
                            var fields=lines[i].split("\t");
                            if (fields.length>3) {
                                tabStyle+=fields[0]+"\t1H\t"+fields[2]+"\t\t\t1\t";
                                var numberJ=fields[3];
                                if (numberJ>0) {
                                    for (var j=0; j<numberJ; j++) {
                                        tabStyle+=fields[j*3+4]+"\td\t"+fields[j*3+6]+"\t";
                                    }
                                }
                                tabStyle+="\r";
                            }
                        }
                        document.form.tableformat.value=tabStyle;


                        //TODO we should take into account symmetrical molcules

                        // we will suppress the lines that are identical and add in the last column the integration
                        var numberIdentical=1;
                        for (var i=0; i<(lines.length-1); i++) {

                            // we should not take into account the first column ...
                            var currentLine=lines[i];
                            var nextLine=lines[i+1];

                            if (currentLine.indexOf("\t")>0) currentLine=currentLine.substring(currentLine.indexOf("\t"));
                            if (nextLine.indexOf("\t")>0) nextLine=nextLine.substring(nextLine.indexOf("\t"));

                            if (currentLine==nextLine) {
                                numberIdentical++;
                                lines[i]="";
                            } else {
                                lines[i]+="\t"+numberIdentical;
                                numberIdentical=1;
                            }


                        }


                        for (var i=0; i<lines.length; i++) {
                            var fields=lines[i].split("\t");

                            if (fields.length>3) {

                                var hID=fields[0];
                                var cID=fields[1];
                                var delta=fields[2];
                                var numberJ=fields[3];
                                var integration=fields[numberJ*3+4];

                                if (acsStyle.length>0) acsStyle+=", ";

                                acsStyle+=delta;
                                if (numberJ>0) {
                                    var multiplicity="";
                                    var multiplet=2;
                                    var coupling="";

                                    var jCoupling=new Array();
                                    for (var j=0; j<numberJ; j++) {
                                        jCoupling[j]=fields[j*3+6];
                                    }

                                    jCoupling.sort(sortNumber);

                                    for (var j=0; j<numberJ; j++) {
                                        // what about the same coupling constant ???
                                        // we should check and compile the multiplicity
                                        if ((j<(numberJ-1)) && (jCoupling[j]==jCoupling[j+1])) {
                                            multiplet+=1;
                                        } else {
                                            multiplicity+=getMultiplet(multiplet);
                                            if (coupling.length>0) coupling+=", ";
                                            coupling+="J="+jCoupling[j];
                                            multiplet=2;
                                        }
                                    }
                                    acsStyle+=" ("+cID+", "+integration+"H, "+multiplicity+", "+coupling+")";
                                } else {
                                    acsStyle+=" ("+cID+", "+integration+"H)";

                                }
                            }
                        }

                        document.form.assignment.value=acsStyle;
                        document.nemo.clearAll();
                        if(option==1){
                            document.nemo.setMolfile(document.form.molfile.value);
                            document.nemo.addSimulatedSpectrum(acsStyle,1);
                        }
                        else{
                            document.nemo.setMolfile(document.form.molfile.value);
                            document.nemo.addSimulatedSpectrum(document.form.tableformat.value,1);
                        }
                    }
                }
            }

            function sortNumber(a, b) {
                return b - a;
            }

            function getMultiplet(multiplet) {
                switch (multiplet) {
                    case 1:
                        return "s";
                    case 2:
                        return "d";
                    case 3:
                        return "t";
                    case 4:
                        return "q";
                    case 5:
                        return "quint";
                    case 6:
                        return "hex";
                    case 7:
                        return "hept";
                    case 8:
                        return "o";
                    case 9:
                        return "n";
                    default :
                        return "m";
                }

            }

            function startEditor() {
                window.open('./jme/jme_window.html','JME','width=500,height=450,scrollbars=no,resizable=yes');
            }

            function fromEditor(mol, smiles) {

                if (smiles=="") {
                    alert ("no molecule submitted");
                    return;
                }
                document.form.molfile.value=mol;
                document.nemo.clearAll();
                var molcan = document.nemo.setMolfile(document.form.molfile.value);
                getPrediction(molcan,1);
            }


            </script>



            <p>

            <form action="/cheminfo/servlet/org.cheminfo.hook.appli.HookServlet" method="post" target="_blank" name="form" onsubmit="document.form.xmlString.value=document.nemo.getXML(); return true;">

                <table width="172" border="0" cellspacing="2" cellpadding="0">
                    <tr>
                        <td>
                            <applet code="org.cheminfo.hook.nemo.Nemo" archive="./nemo.jar" name="nemo" codebase="./" width="600" height="450">
                                You need to <a href="http://www.java.com/getjava/">install java 1.4</a> or later to see this applet.
                            </applet>
                        </td>
                        <td valign="top">
                            <table width="180" border="0" cellspacing="1" cellpadding="3">
                                <tr>
                                    <th valign="top" colspan=2>How to proceed ?</th>
                                </tr>
                                <tr>
                                    <th valign="top" bgcolor="#ffffff"></th>
                                    <td bgcolor="#ffffff">
                                        <p>If you are really in hurry, just click <a href="#" onclick="document.nemo.clearAll(); document.form.molfile.value=document.nemo.setMolFile(document.form.ethylvinylether.value);  getPrediction(document.form.molfile.value,1); return false;">here</a> to get a predicted spectrum of ethylvinylether.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th valign="top" bgcolor="#cccccc">1.</th>

                                    <td bgcolor="#cccccc"><a href="#" onclick="startEditor(0); return false;" title="Draw moecule">Draw a molecule</a> or test with <a href="#" onclick="document.nemo.clearAll(); document.form.molfile.value=document.nemo.setMolfile(document.form.ethylvinylether.value); getPrediction(document.form.molfile.value,1); return false;">ethylvinylether</a>.<p>


                                        <p>

                                            Molfile:<br>
                                            <textarea name="molfile" onclick="this.select()" style="display: block;" rows="6" cols="40">
                                            </textarea>

                                            <textarea name="ethylvinylether" style="display: none;">ethylvinylether.mol


  5  4  0  0  0  0  0  0  0  0999 V2000
   -1.4289    0.2062    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7145   -0.2062    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.2062    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.7145   -0.2062    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.4289    0.2062    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  2  1  2  0
  3  2  1  0
  4  3  1  0
  5  4  1  0
M  END
                                            </textarea></p>

                                        <p></p>
                                </tr>
                                <tr>
                                    <th valign="top" bgcolor="#eeeeee">2.</th>
                                    <td bgcolor="#eeeeee">
                                        You are now ready to predict the NMR spectrum. Just click <a href="#" onclick="getPrediction(document.form.molfile.value,1); return false;">here</a> to proceed.
                                    </td>
                                </tr>
                                <tr>
                                    <th valign="top" bgcolor="#cccccc">3.</th>
                                    <td bgcolor="#cccccc">
                                        You may also copy the ACS assignment

                                        <p><textarea name="assignment" rows="5" cols="40" onclick="this.select()"></textarea></p>
                                        Or a tab-delimited assignment

                                        <p><textarea name="tableformat" rows="5" cols="40" onclick="this.select()"></textarea></p>
                                    </td>
                                </tr>
                                <tr><td>
                                </td><td>
                                    You have a fast computer (or plenty of time), just try our new <a onclick="getPrediction(document.form.molfile.value,2);"><b><font color="red">real spectrum simulator</font></b></a>. It will calculate the same spectrum but taking into account the second order effects.
                                </td></tr>
                            </table>
                        </td>
                    </tr>
                </table>

                <!--
                Size: <input type="text" value=800 name="width" size=4> x <input type="text" value=600 name="height" size=4>
                <input type="hidden" value="http://www.nmrdb.org/cheminfo/servlet/org.dbcreator.MainServlet?action=SendFieldAction&tableName=mass&fieldName=jcamp&uniqueIDValue=1984" name="url">
                <input type="hidden" value="" name="xmlString">
                <input type="hidden" value="72" name="resolution">
                <input type="hidden" value="0" name="rotate">
                <input type="hidden" value="" name="options">
                <input type="hidden" value="png" name="format">

                <input class="smallbutton" type="submit" onclick="document.form.rotate.value=0;document.form.resolution.value=72;document.form.format.value='png';document.form.options.value='nmrAcs,nmrTable';" value="Get Image">
                <input class="smallbutton" type="submit" onclick="document.form.rotate.value=1;document.form.width.value=1400;document.form.height.value=1000;document.form.format.value='png';document.form.resolution.value=100;document.form.options.value='print';" value="Print A4">
                <input class="smallbutton" type="submit" onclick="document.form.rotate.value=1;document.form.width.value=800;document.form.height.value=600;document.form.format.value='pdf';document.form.options.value='';" value="Get PDF">
                <input class="smallbutton" type="submit" onclick="document.form.rotate.value=0;document.form.width.value=800;document.form.height.value=600;document.form.format.value='png';document.form.resolution.value=100;document.form.options.value='print,nmrAcs,nmrTable';" value="Print Report"><br>
-->
            </form>

            <form action="/simulator" method="post" name="simulatorForm" id="simulatorForm">
                <textarea id="prediction" name="prediction" style="display: none;">
                </textarea>
            </form>

            <textarea id="transfered" rows=2 cols=20 style="display: none"><?php if (isset($_POST['molfile'])) {echo $_POST['molfile'];} ?></textarea>


            <script language="javascript">
                function prepareSimulator() {
                    document.simulatorForm.prediction.value=document.form.tableformat.value;
                }
            </script>

            <p>We thanks <a href="http://www.mol-net.com" target="_blank">Molecular Networks</a> for providing the predicting engine.</p>

            <script language="javascript">
			document.nemo.onload = function() {
				console.log('APPLET LOADED');
			};
                function setSmiles(smiles) {
			console.log(smiles);
                    if (initializeRequester()) {
                        requester.onreadystatechange = setMolfileFromWeb;
                        var theUrl="/moleculeDepictor/MoleculeDepictor?format=mol&smiles="+escape(smiles).replace(/%20/,"%2B");
                        requester.open("GET", theUrl, true);
                        requester.send(null);

                    } else {
                        alert("Unable to initialize Ajax");
                    }
                }

                function setMolfileFromWeb() {
                    if (requester.readyState == 4) {
                        if (requester.status == 200) {
                            document.form.molfile.value = document.nemo.setMolfile(requester.responseText);
                            getPrediction(document.form.molfile.value,1);
                        }
                    }
                }

                var smiles=unescape("<?php if (isset($_GET['smiles'])) {echo $_GET['smiles'];} ?>");
                if (smiles.length>1) {
                    setSmiles(smiles);

                }

                var transfered=document.getElementById("transfered").innerHTML;
                if (transfered && transfered.length>50) {
                    document.form.molfile.value = document.nemo.setMolfile(transfered);
                    getPrediction(document.form.molfile.value,1);
                }

            </script>

        </div>
    </td>
    <td class="right"></td>
</tr>




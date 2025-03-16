document.addEventListener("DOMContentLoaded", function() {
    var textLines = [
        { text: "console.//initialize", delay: 3500},
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: "console.main.//start_central-control-node:norm", delay: 500 },
        { text: "console.main.//waitingfor_central-control-node_response", delay: 500 },
        { text: "console.central-control_status.//ccn-staus=ONLINE", delay: 500 },
        { text: "console.central-control_info.//set_ccn-mode:none", delay: 500 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: "console.central-control_info.//shield-ignition-button_pressed=TRUE", delay: 500 },
        { text: "console.central-control_status.//set_ccn-mode:reactor-shield_gen", delay: 500 },
        { text: "console.reactor_info.//shield-gen_process=ACTIVE", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=5", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=23", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=44", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=67", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=72", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=79", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=89", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=99", delay: 1000 },
        { text: "console.reactor_info.//shield-gen_lvl=100", delay: 500 },
        { text: "console.reactor_info.//shield_gen-process=COMPLETE", delay: 500 },
        { text: "console.central-control_info.//watingfor_reactor-ignition-button_is-pressed", delay: 500 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: ".", delay: 100 },
        { text: "console.central-control_info.//reactor-ignition-button_pressed=TRUE", delay: 500 },
        { text: "console.central-control_status.//set_ccn-mode:reactor_pre-startup", delay: 500 },
        { text: "console.reactor_info.//reactor_pre-startup_process=ACTIVE", delay: 500 },
        { text: "console.central-control_status.//set_ccn-mode:none", delay: 500 },
        { text: "console.central-control_info.//connect-to:lcn", delay: 500 },
        { text: "console.central-control_info.//waitingfor_lasers-control-node_response", delay: 500 },
        { text: "console.lasers-control_status.//ccn_connectioned=TRUE", delay: 500 },
        { text: "console.lasers-control_status.//set_lcn-mode:lasers_fueling-process", delay: 500 },
        { text: "console.lasers-control_info.//fueling-process=ACTIVE", delay: 500 },
        { text: "console.lasers-control_info.//fuel-lvl=10", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=32", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=46", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=55", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=68", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=79", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=80", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=95", delay: 1000 },
        { text: "console.lasers-control_info.//fuel-lvl=100", delay: 500 },
        { text: "console.lasesr-control_info.//fueling-process=COMPLETE", delay: 500 },
        { text: "console.lasers-control_info.//set_lcn-mode:lasers_priming-process", delay: 500 },
        { text: "console.lasers-control_info.//start_laser-prime-system:norm", delay: 500 },
        { text: "console.lasers-control_info.//[LASER-PRIME_SYSTEM]:Priming process is in progress...", delay: 500 },
        { text: "console.lasers-control_info.//[LASER-PRIME_SYSTEM]:Waiting for priming process to complete...", delay: 500 },
        { text: "console.lasers-control_info.//[LASER-PRIME_SYSTEM]:Priming process complete!", delay: 500 },
        { text: "console.lasers-control_info.//[LASER-PRIME_SYSTEM]:Setting system mode to - NONE", delay: 500 },
        { text: "console.lasers-control_info.//[LASER-PRIME_SYSTEM]:Disconnecting from LCN... [Success!]", delay: 500 },
        { text: "console.lasers-control_info.//MSG:0x2F4E [lps disconnected]", delay: 500 },
        { text: "console.lasers-control_info.//send-status_to-ccn:lasers-ready", delay: 500 },
        { text: "console.lasers-control_info.//set_lcn-mode:none", delay: 500 },
        { text: "console.lasers-control_info.//waitingfor_disconnect-from:ccn", delay: 500 },
    ];

    function printTextWithDelay() {
        var outputDiv = document.getElementById("output");
        var index = 0;

        function printLine() {
            if (index < textLines.length) {
                outputDiv.innerHTML += textLines[index].text + "<br>";
                index++;
                setTimeout(printLine, textLines[index - 1].delay);
            }
        }

        printLine();
    }
    printTextWithDelay();
});

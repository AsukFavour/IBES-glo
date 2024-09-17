$(document).ready(function () {
    let stepCount = 1;

    // Function to add a new approval step
    $('body').on('click', '.add-step-btn', function () {
        stepCount++;
        let stepNumber = stepCount < 10 ? '0' + stepCount : stepCount;  // Format the number to always have two digits
        
        let newStep = `
        <div class="row mb-3 g-2 approval-step align-items-center">
            <div class="col-auto">
                <span class="step-number">${stepNumber}</span>
            </div>
            <div class="col-3 col-md-2">
                <select class="form-select" required>
                    <option selected>Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                </select>
            </div>
            <div class="col-3 col-md-2">
                <select class="form-select" required>
                    <option selected>Select Approval</option>
                    <option value="Approval 1">Approval 1</option>
                    <option value="Approval 2">Approval 2</option>
                    <option value="Approval 3">Approval 3</option>
                </select>
            </div>
            <div class="col-auto">
                <span class="add-step-btn">
                    <i class="fas fa-plus-circle"></i>
                </span>
            </div>
        </div>`;
        
        $('#approvalSteps').append(newStep);
    });

    // Form submission (for now, just log the values for testing purposes)
    $('#workflowForm').on('submit', function (e) {
        e.preventDefault();
        let workflowName = $('#workflowName').val();
        let approvalCount = $('#approvalCount').val();

        console.log('Workflow Name:', workflowName);
        console.log('Number of Approvals:', approvalCount);
        
        // Iterate over approval steps
        $('.approval-step').each(function(index) {
            let department = $(this).find('select').eq(0).val();
            let approval = $(this).find('select').eq(1).val();
            console.log(`Step ${index + 1}: Department - ${department}, Approval - ${approval}`);
        });
    });
});

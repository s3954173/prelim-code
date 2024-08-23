 function doMenu() {
            var selectElement = document.getElementById("menu");
            var selectedValue = selectElement.value;
            if (selectedValue) {
                window.location.href = selectedValue;
            }
        }
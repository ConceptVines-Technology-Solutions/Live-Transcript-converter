// document.addEventListener("DOMContentLoaded", function () {
const dashboardScreen = document.querySelector(".dashboardScreen");
const headerComponent = document.querySelector(".header");
const dashboardContainer = document.querySelector(".dashboardContainer");
function setdashboardContainerHeight() {
    const dashboardHeight =
        dashboardScreen.getBoundingClientRect().height;
    const headerHeight = headerComponent.offsetHeight;
    const availableHeight = dashboardHeight - headerHeight;
    dashboardContainer.style.height = `${dashboardHeight}px`;
    dashboardContainer.style.paddingTop = `${headerHeight}px`;
}
setdashboardContainerHeight();
window.addEventListener("resize", setdashboardContainerHeight);
// });
document.addEventListener('DOMContentLoaded', function () {
    const customSelectWrappers = document.querySelectorAll('.custom-select-wrapper');
    customSelectWrappers.forEach(wrapper => {
        const customSelectTrigger = wrapper.querySelector('.custom-select-trigger');
        const customOptions = wrapper.querySelector('.custom-options');
        const customSelect = wrapper.querySelector('.custom-select');
        const customOptionElements = customOptions.querySelectorAll('.custom-option');
        // Set the initial value
        const initialValue = customSelect.value;
        const initialOption = Array.from(customOptionElements).find(option => option.getAttribute('data-value') === initialValue);
        if (initialOption) {
            initialOption.classList.add('selected');
            customSelectTrigger.textContent = initialOption.textContent;
        }
        customSelectTrigger.addEventListener('click', function () {
            customOptions.classList.toggle('open');
        });
        customOptionElements.forEach(function (option) {
            option.addEventListener('click', function () {
                customOptionElements.forEach(function (option) {
                    option.classList.remove('selected');
                });
                option.classList.add('selected');
                customSelectTrigger.textContent = option.textContent;
                customSelect.value = option.getAttribute('data-value');
                customOptions.classList.remove('open');
            });
        });
        document.addEventListener('click', function (event) {
            if (!wrapper.contains(event.target)) {
                customOptions.classList.remove('open');
            }
        });
    });
    // Form validation
    // document.getElementById('customSelectForm').addEventListener('submit', function (event) {
    //   customSelectWrappers.forEach(wrapper => {
    //     const customSelect = wrapper.querySelector('.custom-select');
    //     if (!customSelect.value) {
    //       event.preventDefault();
    //       alert('Please select an option.');
    //     }
    //   });
    // });
});


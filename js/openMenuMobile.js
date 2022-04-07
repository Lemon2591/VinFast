

        function openMenuMobile () {
            openMenuMobileList.classList.add('menu-mobile-open');
        }

        let openMenuMobileList = document.getElementById('menu-mobile-open')
        let openMenuMobileIcon = document.getElementById('event-open-menu')

        openMenuMobileIcon.addEventListener("click", openMenuMobile)


        function closeMenuMobile () {
            closeMenuMobileList.classList.remove('menu-mobile-open');
        }

        let closeMenuMobileList = document.getElementById('menu-mobile-open')
        let closeMenuMobileIcon = document.getElementById('event-close-open-menu')

        closeMenuMobileIcon.addEventListener("click", closeMenuMobile)
$(() => {
    function selectTab(selector) {
        const objCont = $(selector);
        const items = objCont.find(".tab_number");

        const contItems = objCont.find('.main_content_tabs_block_item');
        $(items[0]).addClass('active');
        contItems.hide();
        $(contItems[0]).show();

        items.on('click', event => {
            let index = Array.from(items).indexOf(event.currentTarget);
            items.removeClass('active');
            $(event.currentTarget).addClass('active')

            contItems.hide();
            $(contItems[index]).show();
        }
        )
    }

    selectTab(".main_content_tabs_block_wrapper");


    $(".header_navbar_burger").on("click", event => {
        const target = $(event.currentTarget);
        target.toggleClass("active");
        $(".header_navbar_block_container").toggleClass("active");
    });



})
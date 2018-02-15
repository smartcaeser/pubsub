var chosen_two = (function () {

    
    return {
        init: function () {
            var chosen_list_two, chosen_total_two, count_two = 0;

            chosen_list_two = $('#chosen_list_two');
            chosen_total_two = $('#chosen_total_two');

            pubsub.sub('add-to-list', function (item) {
                count_two++;
                chosen_total_two.html(count_two);
                var li = $('<li/>').html(item.name).data('key', item.id);
                chosen_list_two.append(li);

            });

            pubsub.sub('remove-from-list', function (item) {
                count_two--;
                chosen_total_two.html(count_two);
                chosen_list_two.find('li').filter(function () {
                    return $(this).data('key') == item.id;
                }).remove();
            });

        }
    };
})();
chosen_two.init();
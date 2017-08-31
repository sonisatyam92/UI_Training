function PersonView() {
    function refresh(data) {
        var tbody = $('.data');
        var txt = "";
        for (var i = 0; i < data.length; i++) {
            var person = data[i];
            txt += '<tr>' +
                '<td class="text-capitalize">' + person.getFirstName() + '</td>' +
                '<td class="text-capitalize">' + person.getLastName() + '</td>' +
                '<td class="text-capitalize">' + person.getAge() + '</td>' +
                '<td class="text-capitalize">' + person.getGender() + '</td>' +
                '<td class="text-capitalize">' + person.getLocation() + '</td>' +
                '</tr>';
        }
        tbody.html(txt);
    }

    return {
        refresh: refresh
    }
}

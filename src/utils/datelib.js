
export default class DateLib {
    static value = new Date();

    static resetValue() {
        DateLib.value = new Date();
    }

    static setValue(date = false) {
        if (typeof date === 'string') {
            DateLib.value = new Date(...DateLib.getParsedDate(date));
        } else if (typeof date === "number") {
            DateLib.value = new Date(date * 1000);
        }
        return this;
    }

    static getParsedDate(date) {
        let dateArr = String(date).split(' ');
        dateArr = dateArr.length > 1 ? dateArr : String(date).split('T');
        var days = String(dateArr[0]).split('-');
        var hours = String(dateArr[1]).split(':');
        if (dateArr.length === 2) {
            return [parseInt(days[0]), parseInt(days[1]) - 1, parseInt(days[2]), parseInt(hours[0] || 0), parseInt(hours[1] || 0), parseInt(hours[2] || 0)];
        } else {
            return [parseInt(days[0]), parseInt(days[1]) - 1, parseInt(days[2]), '00', '00', '00'];
        }
    }

    static getUnix(value) {
        let date = Math.floor(value / 1000);
        DateLib.resetValue();
        return date;
    }

    static format(format = "Y-m-d H:i:s") {

        let date = DateLib.value;
        if (date < 1) date = new Date();
        let d = date.getDate();
        if (d < 10) d = "0" + d;
        let m = date.getMonth() + 1; //January is 0!
        let Y = date.getFullYear();
        let H = date.getHours();
        if (H < 10) H = "0" + H;
        let i = date.getMinutes();
        if (i < 10) i = "0" + i;
        let s = date.getSeconds();
        if (s < 10) s = "0" + s;

        let months = DateLib.getShortMonth();
        let monthsFull = DateLib.getFullMonth();
        let replaceWith = [
            ["Y", Y],
            ["m", m],
            ["M", months[parseInt(m) - 1]],
            ["MF", monthsFull[parseInt(m) - 1]],
            ["w", date.getDay()],
            ["W", 0],
            ["d", d],
            ["H", H],
            ["i", i],
            ["s", s],
        ];
        for (let key in replaceWith) {
            let [find, replace] = replaceWith[key];
            format = format.replace(find, replace);
        }

        DateLib.resetValue()
        return format;
    }


    static endOf(type) {
        let date = DateLib.value;

        switch (type) {
            case 'day':
                DateLib.value.setHours(23, 59, 59, 999);
                break;
            case 'week':
                DateLib.value.setDate(date.getDate() - date.getDay() + 6);
                DateLib.value.setHours(23, 59, 59, 999);
                break;
            case 'isoWeek':
                DateLib.value.setDate(date.getDate() - date.getDay() + 7);
                DateLib.value.setHours(23, 59, 59, 999);
                break;
            case 'month':
                DateLib.value = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
                break;
            case 'year':
                DateLib.value = new Date(date.getFullYear(), 11, 31);
                break;
        }
        return this;
    }


    static add(amount, type) {
        let date = DateLib.value;

        switch (type) {
            case 'day':
                DateLib.value.setDate(date.getDate() + amount);
                break;
            case 'week':
                DateLib.value.setDate(date.getDate() + amount * 7);
                break;
            case 'month':
                DateLib.addMonths(DateLib.value, amount);
                break;
            case 'year':
                DateLib.addYear(DateLib.value, amount);
                break;
        }
        return this;
    }


    static subtract(amount, type) {
        let date = DateLib.value;

        switch (type) {
            case 'day':
                DateLib.value.setDate(date.getDate() - amount);
                break;
            case 'week':
                DateLib.value.setDate(date.getDate() - amount * 7);
                break;
            case 'month':

                break;
            case 'year':

                break;
        }
        return this;
    }


    static set(type, value) {
        switch (type) {
            case 'minutes':
                DateLib.value.setMinutes(value);
                break;
            case 'hours':
                DateLib.value.setHours(value);
                break;
            case 'date':
                DateLib.value.setDate(value);
                break;
            case 'month':
                DateLib.value.setMonth(value);
                break;
            case 'year':
                DateLib.value.setFullYear(value);
                break;
        }
        return this;
    }


    //HELPER METHODS START

    static addMonths(date, months) {
        let d = date.getDate();
        date.setMonth(date.getMonth() + months);
        if (date.getDate() !== d) {
            date.setDate(0);
        }
        return date;
    }

    static addYear(date, months) {
        let d = date.getDate();
        date.setFullYear(date.getFullYear() + months);
        if (date.getDate() !== d) {
            date.setDate(0);
        }
        return date;
    }

    static setToMonday(date) {
        let day = date.getDay() || 7;
        if (day !== 1)
            date.setHours(-24 * (day - 1));
        return date;
    }

    //HELPER METHODS END

    static getWeeks() {
        return [
            { value: 1, title: 'Monday' },
            { value: 2, title: 'Tuesday' },
            { value: 3, title: 'Wednesday' },
            { value: 4, title: 'Thursday' },
            { value: 5, title: 'Friday' },
            { value: 6, title: 'Saturday' },
            { value: 7, title: 'Sunday' },
        ];
    }

    static getShortWeeks() {
        return [
            { value: 1, title: 'Mon' },
            { value: 2, title: 'Tue' },
            { value: 3, title: 'Wed' },
            { value: 4, title: 'Thu' },
            { value: 5, title: 'Fri' },
            { value: 6, title: 'Sat' },
            { value: 7, title: 'Sun' },
        ];
    }

    static getMonths() {
        return [
            { value: 1, title: 'January' },
            { value: 2, title: 'February' },
            { value: 3, title: 'March' },
            { value: 4, title: 'April' },
            { value: 5, title: 'May' },
            { value: 6, title: 'June' },
            { value: 7, title: 'July' },
            { value: 8, title: 'August' },
            { value: 9, title: 'September' },
            { value: 10, title: 'October' },
            { value: 11, title: 'November' },
            { value: 12, title: 'December' },
        ];
    }

    static getShortMonth() {
        return [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
    }

    static getFullMonth() {
        return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
    }

    static getWeek(id) {
        return DateLib.getWeeks()[id - 1];
    }

    static getMonth(id) {
        return DateLib.getFullMonth()[id];
    }


    static getUnixtime() {
        let time = new Date().getTime();
        time = Math.floor(time / 1000);
        return time;
    }

    // Convert unixtime to date format
    static date(format = "Y-m-d H:i:s", unixtime = 0) {
        let date = new Date(unixtime * 1000);
        if (unixtime < 1)
            date = new Date();
        let d = date.getDate();
        let m = date.getMonth() + 1; //January is 0!
        let Y = date.getFullYear();
        let H = date.getHours();
        if (H < 10)
            H = '0' + H;
        let i = date.getMinutes();
        if (i < 10)
            i = '0' + i;
        let s = date.getSeconds();
        if (s < 10)
            s = '0' + s;

        let months = DateLib.getShortMonth();
        let monthsFull = DateLib.getFullMonth();
        let replaceWith = [
            ["Y", Y],
            ["m", m],
            ["M", months[parseInt(m) - 1]],
            ["Th", monthsFull[parseInt(m) - 1]],
            ["Pr", monthsFull[parseInt(m) - 2]],
            ["w", date.getDay()],
            ["W", 0],
            ["d", d],
            ["H", H],
            ["i", i],
            ["s", s],
        ];
        for (let key in replaceWith) {
            let [find, replace] = replaceWith[key];
            format = format.replace(find, replace);
        }
        return format;
    }

    // Calculate time elapse from current time
    static elapse(unixtime) {
        let time = new Date().getTime();
        time = Math.floor(time / 1000);
        let elapse = time - unixtime;
        if (elapse < 0)
            elapse = 0;

        let { d, h, m, s } = DateLib.parseElapse(elapse);

        return {
            "d": d < 10 ? '0' + d : d,
            "h": h < 10 ? '0' + h : h,
            "m": m < 10 ? '0' + m : m,
            "s": s < 10 ? '0' + s : s,
        };
    }

    static parseElapse(elapse) {
        let d = Math.floor(elapse / 86400);
        let h = Math.floor((elapse - d * 86400) / 3600);
        let m = Math.floor((elapse - d * 86400 - h * 3600) / 60);
        let s = elapse - d * 86400 - h * 3600 - m * 60;
        return { d, h, m, s };
    }


    static filterTime(unixtime) {
        let txt = '';
        if (!unixtime) {
            txt = 'Now';
        } else {
            let currentUnixtime = DateLib.getUnixtime();
            let dif = currentUnixtime - unixtime;
            if (DateLib.date("Y-m-d", currentUnixtime) === DateLib.date("Y-m-d", unixtime)) {
                txt = "Today" + ' ' + DateLib.date("H:i", unixtime);
            } else if (DateLib.date("Y-m-d", currentUnixtime - 86400) === DateLib.date("Y-m-d", unixtime)) {
                txt = "Yesterday" + ' ' + DateLib.date("H:i", unixtime);
            } else if (DateLib.date("Y", currentUnixtime - 86400) !== DateLib.date("Y", unixtime)) {
                txt = DateLib.date("d M, Y", unixtime);
            } else if (dif / 86400 > 1) {
                txt = DateLib.date("d M", unixtime);
            }
        }
        return txt;
    }
};

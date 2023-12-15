export const formatScheduleFormDb = (schedules) => {
    schedules = schedules.map((schedule) => {
        schedule = {
            ... schedule,
            ... schedule.product,
        };
        delete schedule.product;
        return schedule;
    });

    return schedules;
};
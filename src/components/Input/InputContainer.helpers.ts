// функция валидации e-mail (вернет true если значение прошло валидацию)
export const CheckValidateEmail = (email: string): boolean => {
    const patternEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]((?=[^-]*[-]?[^-]*$)[-a-z0-9]{0,61}[a-z0-9])?\.)+(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
    return patternEmail.test(email);
};

// дефисы в домене (вернет true если дефис содржится в начале и конце строки или идет более двух подряд)
export const CheckContainsDash = (hosts: Array<string>): boolean => {
    const patternDomain = /^(?![-]|.*[-]$)(?=[^-]*[-]?[^-]*$).{1,63}$/iu;
    const contain = hosts.filter((host) => patternDomain.test(host));
    return !!contain;
};

// точки в имени (вернет true если точка содржится в начале и конце строки или идет более двух подряд)
export const CheckContainsDot = (userName: string): boolean => {
    const patternUserName = /^(?![.]|.*[.]$)(?=[^.]*[.]?[^.]*$).{1,63}$/iu;
    return !patternUserName.test(userName);
};

// доменная зона (вернет true если есть ошибка валидации)
export const CheckZone = (hostZone: string): boolean => {
    const patternZone = /(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|^[a-z][a-z]$)/iu;
    return !patternZone.test(hostZone);
};
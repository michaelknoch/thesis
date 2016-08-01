@decorate
class ClassToDecorate {
    doSomething();
}

function decorate(target: Object) {
    target.decorate = true;
}

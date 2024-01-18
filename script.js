function runAnimations() {
  document
    .querySelector("#id-I88_82")
    .addEventListener("click", func_I88_82_57);

  function func_I88_82_57() {
    document.querySelector("#id-38").classList.add("animationClass-38");
    document
      .querySelector("#id-I88_82")
      .removeEventListener("click", func_I88_82_57);

    setTimeout(() => {
      document
        .querySelector("#id-I07_63")
        .addEventListener("click", func_I07_63_76);
    }, 100);
  }

  function func_I07_63_76() {
    document
      .querySelector("#id-I07_63")
      .removeEventListener("click", func_I07_63_76);

    setTimeout(() => {
      document
        .querySelector("#id-I26_44")
        .addEventListener("click", func_I26_44_95);
    }, 100);
  }

  function func_I26_44_95() {
    document
      .querySelector("#id-I26_44")
      .removeEventListener("click", func_I26_44_95);

    setTimeout(() => {
      document
        .querySelector("#id-I31_25")
        .addEventListener("click", func_I31_25_14);
    }, 100);
  }

  function func_I31_25_14() {
    document
      .querySelector("#id-I31_25")
      .removeEventListener("click", func_I31_25_14);
  }
}
runAnimations();
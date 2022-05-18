const log = (from, text, color = [255, 255, 255]) => {
    TriggerEvent("chat:addMessage", {
      color: color,
      multiline: true,
      args: [from, text],
    });
  };
  
  onNet("jsex:addMessage", (opts) => {
    console.log("jsex:addMessage");
    TriggerEvent("chat:addMessage", opts);
  });
RegisterNetEvent("js:chatCL")
onNet("js:chatCL", (obj) => {
    emit("chat:addMessage", {
        args: [obj.msg],
        color: obj.color
    })
    console.log(obj.msg)
    return
})

setImmediate(() => {
    emit('chat:addSuggestion', '/kick', 'KICKAR ALGUEM DA CIDADE', [
        { name: "id", help: "/kick ID DO PLAYER" }
    ]);
    emit('chat:addSuggestion', '/unban', 'REMOVER BAN NA CIDADE', [
        { name: "Steam ID", help: "ex: steam:110000110ba80e2" }
    ]);
    emit('chat:addSuggestion', '/ban', 'BANIR PLAYER DA CIDADE.', [
        { name: "id", help: "/ban ID DO PLAYER " }
    ]);
});

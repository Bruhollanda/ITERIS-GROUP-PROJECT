import React from "react";
export default function Form() {
  return (
    <div className="form">
      <form>
        <label>
            Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label>
            Descrição
          <input type = "textarea" data-testid="description-input"/>
        </label>
        <label>
            Imagem
          <input type = "text" data-testid="image-input"/>
        </label>
        <button>Salvar</button>
      </form>
    </div>
  );
}

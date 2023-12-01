package com.backend.clinicaodontologica.dto.entrada.paciente;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class OdontologoEntradaDto {

    @NotNull(message = "La matrícula del odontólogo no puede estar vacía.")
    private String matricula;
    @NotNull(message = "El nombre del odontólogo no puede estar vacío.")
    @NotBlank(message = "Es necesario proporcionar el nombre del odontólogo.")
    @Size(max = 50, message = "El nombre debe tener un máximo de 50 caracteres.")
    private String nombre;
    @NotNull(message = "El nombre del odontólogo no puede estar vacío.")
    @NotBlank(message = "Es necesario proporcionar el nombre del odontólogo.")
    @Size(max = 50, message = "El nombre debe tener un máximo de 50 caracteres.")
    private String apellido;


    public OdontologoEntradaDto() {
    }

    public OdontologoEntradaDto(String nombre, String apellido, String matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }
}

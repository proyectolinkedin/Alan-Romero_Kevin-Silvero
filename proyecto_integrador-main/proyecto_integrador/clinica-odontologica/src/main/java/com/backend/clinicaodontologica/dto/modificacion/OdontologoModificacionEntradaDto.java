package com.backend.clinicaodontologica.dto.modificacion;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OdontologoModificacionEntradaDto {
    @NotNull(message = "Debe proveerse el id del odontologo que se desea modificar")
    private Long id;

    @NotNull(message = "La matrícula del odontólogo no puede estar vacía.")
    @NotBlank(message = "Es necesario proporcionar la matrícula del odontólogo.")
    @Size(min = 10, message = "El campo debe contener como mínimo 10 caracteres.")
    private String matricula;

    @Size(max = 50, message = "El nombre del odontólogo debe tener un máximo de 50 caracteres.")
    @NotNull(message = "El nombre del odontólogo no puede estar vacío.")
    @NotBlank(message = "Es necesario proporcionar el nombre del odontólogo.")
    private String nombre;

    @Size(max = 50, message = "El apellido del odontólogo debe tener un máximo de 50 caracteres.")
    @NotNull(message = "El apellido del odontólogo no puede estar vacío.")
    @NotBlank(message = "Es necesario proporcionar el apellido del odontólogo.")
    private String apellido;


    public OdontologoModificacionEntradaDto() {
    }

    public OdontologoModificacionEntradaDto(Long id, String matricula, String nombre, String apellido) {
        this.id = id;
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
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
}
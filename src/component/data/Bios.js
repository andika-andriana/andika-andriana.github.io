import React, { Component } from "react";
import { Segment, Table, Icon, Divider } from "semantic-ui-react";

class Bios extends Component {
  render() {
    return (
      <Segment inverted>
        <Divider horizontal inverted>
          Data Personal
        </Divider>
        <Table
          celled
          inverted
          selectable
          collapsing
          style={{ fontSize: 12, textAlign: "center" }}
          verticalAlign="middle"
        >
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.Cell>Andika Andriana</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Agama</Table.HeaderCell>
              <Table.Cell>Islam</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.Cell>Menikah</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Pendidikan terakhir</Table.HeaderCell>
              <Table.Cell>S1 - Teknik dan Ilmu Komputer</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Tanggal lahir</Table.HeaderCell>
              <Table.Cell>05-Mei-1995</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Tempat lahir</Table.HeaderCell>
              <Table.Cell>Tasikmalaya, Jawa Barat</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Alamat</Table.HeaderCell>
              <Table.Cell>
                Jl. Persahabatan, Studio Alam TVRI, Sukmajaya, Depok Jawa Barat
                16412
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Divider horizontal inverted>
          Contact
        </Divider>
        <Table
          celled
          inverted
          selectable
          style={{ fontSize: 12, textAlign: "center" }}
          verticalAlign="middle"
        >
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="mobile alternate" />
              </Table.HeaderCell>
              <Table.Cell>081386299881</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="mail" />
              </Table.HeaderCell>
              <Table.Cell>andriana.mia1@gmail.com</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
export default Bios;

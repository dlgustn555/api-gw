{{/*
Create ncc labels
*/}}
{{- define "ncc.labels" -}}
app.kubernetes.io/name: '{{ required "" .Values.n2c.application }}'
app.kubernetes.io/instance: '{{ required "" .Values.n2c.instance }}'
app.kubernetes.io/version: '{{ required "" .Values.n2c.version }}'
ncc.navercorp.com/installation: '{{ required "" .Values.n2c.installation }}'
{{- end -}}

{{/*
Create ncc selectors
*/}}
{{- define "ncc.selectors" -}}
app.kubernetes.io/name: '{{ required "" .Values.n2c.application }}'
app.kubernetes.io/instance: '{{ required "" .Values.n2c.instance }}'
ncc.navercorp.com/installation: '{{ required "" .Values.n2c.installation }}'
{{- end -}}